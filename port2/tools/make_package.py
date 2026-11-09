#!/usr/bin/env python3
"""Build a SELF-CONTAINED directory (and a single self-extracting executable) of the app.

Usage: make_package.py [output_dir]        (default: <root>/dist/netflix-port)
Environment: SKIP_SINGLE=1 builds only the directory; WVCDM_SRC=<file or dir> overrides the bundled Widevine CDM.

Strategy ("AppImage without squashfs"): copy the binaries (node, ffmpeg, curl, python+PIL, cdmhost, scene_viewer)
together with their shared-library closure (ldd) and glibc itself (ld-linux + libc), and run everything through
`ld-linux --library-path sys/lib binary` wrappers, so it also runs on distributions with an older glibc.
Not bundled: GPU/driver libraries (libGL*, libEGL*, libGLES*, libgbm, nvidia...). The target needs x86_64,
a video driver with OpenGL ES/EGL, a PulseAudio-compatible sound server, /bin/sh, mkfifo and /dev/shm.

The two native programs (scene_viewer, cdmhost) are compiled from source here. The UI scripts live in <root>/tvui
and the Widevine CDM in port2/cdm (both stored in the repository so a build never depends on a remote server).
"""
import glob, os, re, shutil, subprocess, sys, tarfile

HERE = os.path.dirname(os.path.abspath(__file__))
PORT2 = os.path.dirname(HERE)
ROOT = os.path.dirname(PORT2)
OUT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'dist', 'netflix-port'))
SYS = os.path.join(OUT, 'sys'); LIB = os.path.join(SYS, 'lib'); LIBEXEC = os.path.join(SYS, 'libexec'); BIN = os.path.join(OUT, 'bin')

EXCLUDE = re.compile(r'^(linux-vdso|libGL(ESv[12])?\.|libGLdispatch|libGLX|libEGL|libOpenGL|libgbm|libnvidia|libcuda|libnvcuvid|libvdpau_|libdrm_(amdgpu|intel|nouveau|radeon))')
GLIBC_EXTRA = ['libnss_files.so.2', 'libnss_dns.so.2', 'libresolv.so.2', 'libdl.so.2', 'librt.so.1', 'libpthread.so.0', 'libutil.so.1', 'libanl.so.1']

NOTO = ['NotoSans-Regular.ttf', 'NotoSansArabic-Regular.ttf', 'NotoSansHebrew-Regular.ttf', 'NotoSansDevanagari-Regular.ttf',
        'NotoSansBengali-Regular.ttf', 'NotoSansGujarati-Regular.ttf', 'NotoSansGurmukhi-Regular.ttf', 'NotoSansKannada-Regular.ttf',
        'NotoSansMalayalam-Regular.ttf', 'NotoSansOriya-Regular.ttf', 'NotoSansTamil-Regular.ttf', 'NotoSansTelugu-Regular.ttf',
        'NotoSansThai-Regular.ttf', 'NotoSansGeorgian-Regular.ttf', 'NotoSansArmenian-Regular.ttf', 'NotoSansCJK-Regular.ttc']

CDM_CANDIDATES = [
    '~/.var/app/tv.kodi.Kodi/data/cdm',
    '~/.kodi/cdm',
    '~/.config/google-chrome/WidevineCdm/*/_platform_specific/linux_x64',
    '~/.config/chromium/WidevineCdm/*/_platform_specific/linux_x64',
    '/opt/google/chrome/WidevineCdm/_platform_specific/linux_x64',
    '/usr/lib/chromium/WidevineCdm/_platform_specific/linux_x64',
]


def sh(*a, **k):
    return subprocess.run(a, check=True, capture_output=True, text=True, **k).stdout


def ldd(path):
    out = subprocess.run(['ldd', path], capture_output=True, text=True).stdout
    res = {}
    for line in out.splitlines():
        m = re.match(r'\s*(\S+) => (\S+) \(', line)
        if m:
            res[os.path.basename(m.group(1))] = m.group(2)
        else:
            m = re.match(r'\s*(/\S+) \(', line)
            if m:
                res[os.path.basename(m.group(1))] = m.group(1)
    return res


copied = set()


def put_lib(name, src):
    if EXCLUDE.match(name) or name in copied:
        return
    shutil.copy2(os.path.realpath(src), os.path.join(LIB, name))
    copied.add(name)


def bundle_libs(*paths):
    for p in paths:
        for name, src in ldd(p).items():
            if os.path.exists(src):
                put_lib(name, src)


def copy_bin(src, name):
    d = os.path.join(LIBEXEC, name)
    shutil.copy2(os.path.realpath(src), d)
    os.chmod(d, 0o755)
    bundle_libs(d)
    return d


def wrapper(path, real, env=''):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    rel = os.path.relpath(os.path.join(LIBEXEC, real), os.path.dirname(path))
    relroot = os.path.relpath(SYS, os.path.dirname(path))
    with open(path, 'w') as f:
        f.write(f'''#!/bin/sh
D="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
S="$D/{relroot}"
{env}exec "$S/lib/ld-linux-x86-64.so.2" --library-path "$S/lib" "$D/{rel}" "$@"
''')
    os.chmod(path, 0o755)


def find_font(name):
    for base in ('/usr/share/fonts', os.path.expanduser('~/.local/share/fonts')):
        for dp, _, files in os.walk(base):
            if name in files:
                return os.path.join(dp, name)
    return None


def find_cdm():
    """Return (directory, libwidevinecdm.so path) of a Widevine CDM installed on the build machine."""
    src = os.environ.get('WVCDM_SRC')
    cands = [src] if src else [os.path.join(PORT2, 'cdm')] + [os.path.expanduser(c) for c in CDM_CANDIDATES]
    for c in cands:
        for d in glob.glob(c):
            lib = d if os.path.isfile(d) else os.path.join(d, 'libwidevinecdm.so')
            if os.path.isfile(lib):
                return os.path.dirname(lib), lib
    sys.exit('Widevine CDM not found. Install it (Chrome, Chromium or Kodi) or set WVCDM_SRC=<libwidevinecdm.so or its directory>.')


def compile_native(tmp):
    os.makedirs(tmp, exist_ok=True)
    viewer, cdmhost = os.path.join(tmp, 'scene_viewer'), os.path.join(tmp, 'cdmhost')
    flags = sh('pkg-config', '--cflags', '--libs', 'sdl2').split()
    subprocess.run(['gcc', '-O2', '-pthread', '-o', viewer, os.path.join(PORT2, 'renderer', 'scene_viewer.c')] + flags + ['-lGLESv2', '-lm'], check=True)
    subprocess.run(['g++', '-std=c++17', '-O2', '-fPIC', '-Wno-attributes', '-o', cdmhost, os.path.join(PORT2, 'cdmhost', 'cdmhost.cpp'), '-ldl', '-lpthread'], check=True)
    return viewer, cdmhost


def main():
    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    for d in (LIB, LIBEXEC, BIN):
        os.makedirs(d)
    ui = os.path.join(ROOT, 'tvui')
    if not os.path.isdir(os.path.join(ui, 'apps')):
        sys.exit('UI scripts missing: <root>/tvui/apps not found.')
    cdm_dir, cdm_lib = find_cdm()
    viewer, cdmhost = compile_native(os.path.join(os.path.dirname(OUT), '_native'))

    ld = os.path.realpath('/lib64/ld-linux-x86-64.so.2')
    shutil.copy2(ld, os.path.join(LIB, 'ld-linux-x86-64.so.2'))
    copied.add('ld-linux-x86-64.so.2')
    libdir = os.path.dirname(os.path.realpath('/usr/lib/libc.so.6'))
    for n in ['libc.so.6', 'libm.so.6'] + GLIBC_EXTRA:
        p = os.path.join(libdir, n)
        if os.path.exists(p):
            put_lib(n, p)

    for name in ('node', 'ffmpeg', 'curl'):
        copy_bin(shutil.which(name) or sys.exit(f'{name} not found on the build machine'), name)
        wrapper(os.path.join(BIN, name), name)

    pyv = sh('python3', '-c', 'import sys;print("%d.%d"%sys.version_info[:2])').strip()
    copy_bin(os.path.realpath(shutil.which('python3')), 'python3')
    stdlib = sh('python3', '-c', 'import sysconfig;print(sysconfig.get_path("stdlib"))').strip()
    pdst = os.path.join(SYS, 'python', 'lib', f'python{pyv}')
    shutil.copytree(stdlib, pdst, ignore=shutil.ignore_patterns('site-packages', 'test', 'tests', 'idlelib', 'tkinter', 'turtledemo', 'turtle.py', 'ensurepip', '__pycache__', 'lib2to3', 'config-*'))
    sp = os.path.join(pdst, 'site-packages')
    os.makedirs(sp)
    import PIL
    shutil.copytree(os.path.dirname(PIL.__file__), os.path.join(sp, 'PIL'), ignore=shutil.ignore_patterns('__pycache__', 'tests'))
    for root, _, files in os.walk(pdst):
        for f in files:
            if f.endswith('.so') or '.so.' in f:
                bundle_libs(os.path.join(root, f))
    libpy_dir = os.path.dirname(os.path.realpath(shutil.which('python3')))
    for d in {'/usr/lib', os.path.join(libpy_dir, '..', 'lib')}:
        if os.path.isdir(d):
            for n in os.listdir(d):
                if re.match(rf'libpython{re.escape(pyv)}\.so', n):
                    put_lib(n, os.path.join(d, n))
    wrapper(os.path.join(BIN, 'python3'), 'python3', 'export PYTHONHOME="$S/python" PYTHONNOUSERSITE=1 PYTHONDONTWRITEBYTECODE=1\n')

    app = os.path.join(OUT, 'port2')
    os.makedirs(app)
    shutil.copytree(os.path.join(PORT2, 'runtime'), os.path.join(app, 'runtime'), ignore=shutil.ignore_patterns('__pycache__', 'discover.js'))
    os.makedirs(os.path.join(app, 'renderer'))
    shutil.copy2(os.path.join(PORT2, 'renderer', 'imgtext.py'), os.path.join(app, 'renderer', 'imgtext.py'))
    os.makedirs(os.path.join(app, 'splash'))
    shutil.copy2(os.path.join(PORT2, 'splash', 'error.js'), os.path.join(app, 'splash', 'error.js'))
    shutil.copytree(os.path.join(PORT2, 'splash', 'error-text'), os.path.join(app, 'splash', 'error-text'))
    shutil.copytree(os.path.join(PORT2, 'assets', 'icon'), os.path.join(app, 'assets', 'icon'))
    os.makedirs(os.path.join(app, 'data'))
    for f in ('upgrade_policy.json', 'nonmember_policy.txt'):
        shutil.copy2(os.path.join(PORT2, 'data', f), os.path.join(app, 'data', f))
    cache = os.path.join(app, 'cache')
    os.makedirs(cache)
    with tarfile.open(os.path.join(PORT2, 'assets', 'splash2.tar.xz')) as t:
        t.extractall(cache)
    shutil.copytree(os.path.join(PORT2, 'assets', 'ui-fonts'), os.path.join(cache, 'fonts'))
    shutil.copytree(ui, os.path.join(OUT, 'tvui'), ignore=shutil.ignore_patterns('*.bak', '*.md'))

    fd = os.path.join(app, 'fonts')
    os.makedirs(fd)
    for n in NOTO:
        p = find_font(n)
        if p:
            shutil.copy2(p, fd)
        else:
            print('warning: font not found on the build machine:', n)

    copy_bin(viewer, 'scene_viewer')
    wrapper(os.path.join(app, 'renderer', 'scene_viewer'), 'scene_viewer')
    copy_bin(cdmhost, 'cdmhost')
    os.makedirs(os.path.join(app, 'cdmhost'))
    wrapper(os.path.join(app, 'cdmhost', 'cdmhost'), 'cdmhost')
    shutil.copy2(cdm_lib, os.path.join(app, 'cdmhost', 'libwidevinecdm.so'))
    for f in ('manifest.json', 'LICENSE'):
        if os.path.exists(os.path.join(cdm_dir, f)):
            shutil.copy2(os.path.join(cdm_dir, f), os.path.join(app, 'cdmhost', f))
    bundle_libs(os.path.join(app, 'cdmhost', 'libwidevinecdm.so'))

    launcher = os.path.join(OUT, 'netflix')
    with open(launcher, 'w') as f:
        f.write('''#!/bin/sh
R="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
export PATH="$R/bin:$PATH" PKG_ROOT="$R" PKG_NODE="$R/bin/node" WINDOW=1
[ -n "$PKG_LAUNCHER" ] || export PKG_LAUNCHER="$R/netflix"
if [ -z "$SDL_VIDEODRIVER" ]; then
  if [ -n "$WAYLAND_DISPLAY" ]; then SDL_VIDEODRIVER=wayland; else SDL_VIDEODRIVER=x11; fi
  export SDL_VIDEODRIVER
fi
if [ ! -w "$R/port2/data" ] || [ ! -w "$R/port2/cache" ]; then
  echo "This folder must be writable (login and cache live in port2/data and port2/cache)." >&2; exit 1
fi
cd "$R/port2/runtime" || exit 1
exec "$R/bin/node" host.js "$@"
''')
    os.chmod(launcher, 0o755)
    with open(os.path.join(OUT, 'README.txt'), 'w') as f:
        f.write('''Netflix (unofficial Linux port) - self-contained package
========================================================
Run:  ./netflix

- Nothing to install: node, ffmpeg, python+Pillow, libraries and glibc are included.
- Needs: Linux x86_64, a video driver with OpenGL ES/EGL (Mesa/NVIDIA), a PulseAudio-compatible sound
  server (PulseAudio or PipeWire), internet access and a writable folder.
- The login is stored in port2/data/cookies.json (do NOT share it). Delete it to sign out.
- If the window does not open on Wayland:  SDL_VIDEODRIVER=x11 ./netflix   (or the reverse).
''')
    shutil.rmtree(os.path.dirname(viewer))
    tot = int(sh('du', '-sm', OUT).split()[0])
    print(f'package ready in {OUT} ({tot} MB, {len(copied)} libraries)')


STUB = r"""#!/bin/sh
# Netflix - single self-extracting executable. First run extracts to ~/.local/share/Netflix/ and starts it.
ID=__ID__
OFFSET=__OFFSET__
SELF="$(readlink -f "$0")"
DATA="${XDG_DATA_HOME:-$HOME/.local/share}/Netflix"
APP="$DATA/app-$ID"
if [ ! -x "$APP/netflix" ]; then
  command -v xz >/dev/null 2>&1 || { echo "The 'xz' tool is required to extract Netflix on first run." >&2; exit 1; }
  mkdir -p "$DATA" || exit 1
  TMP="$DATA/.extract-$$"; rm -rf "$TMP"; mkdir -p "$TMP"
  echo "Netflix: preparing on first run (a few seconds)..." >&2
  if tail -c +$OFFSET "$SELF" | tar -xJf - -C "$TMP"; then
    mkdir -p "$DATA/data"
    for f in upgrade_policy.json nonmember_policy.txt; do cp -f "$TMP/__DIR__/port2/data/$f" "$DATA/data/$f"; done
    rm -rf "$TMP/__DIR__/port2/data"; ln -s "$DATA/data" "$TMP/__DIR__/port2/data"
    rm -rf "$APP"; mv "$TMP/__DIR__" "$APP"
    for d in "$DATA"/app-*; do [ "$d" = "$APP" ] || rm -rf "$d"; done
  else
    echo "Netflix: extraction failed." >&2; rm -rf "$TMP"; exit 1
  fi
  rm -rf "$TMP"
fi
command -v gio >/dev/null 2>&1 && gio set "$SELF" metadata::custom-icon "file://$APP/port2/assets/icon/netflix-256.png" >/dev/null 2>&1
export PKG_LAUNCHER="$SELF"
exec "$APP/netflix" "$@"
exit 1
"""


def make_single():
    import hashlib
    dist = os.path.dirname(OUT)
    name = os.path.basename(OUT)
    payload = os.path.join(dist, name + '.payload.tar.xz')
    subprocess.run(f'tar -C "{dist}" -cf - "{name}" | xz -T0 -6 > "{payload}"', shell=True, check=True)
    h = hashlib.sha256(open(payload, 'rb').read()).hexdigest()[:12]
    stub = STUB.replace('__ID__', h).replace('__DIR__', name)
    off = len(stub.replace('__OFFSET__', '0' * 10).encode()) + 1
    stub = stub.replace('__OFFSET__', str(off).zfill(10))
    assert len(stub.encode()) + 1 == off
    exe = os.path.join(dist, 'Netflix')
    with open(exe, 'wb') as f:
        f.write(stub.encode())
        f.write(open(payload, 'rb').read())
    os.chmod(exe, 0o755)
    os.remove(payload)
    print(f'single executable: {exe} ({os.path.getsize(exe) // 1048576} MB, id {h})')


main()
if not os.environ.get('SKIP_SINGLE'):
    make_single()
