#!/usr/bin/env python3
import argparse, glob, hashlib, os, shutil, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PORT2 = os.path.dirname(HERE)
ROOT = os.path.dirname(PORT2)
DIST = os.path.join(ROOT, 'dist')

ap = argparse.ArgumentParser()
ap.add_argument('--app-id', default='io.vacuumflix.Vacuumflix')
ap.add_argument('--tree', default=os.path.join(DIST, 'flatpak', 'vacuumflix'))
ap.add_argument('--out', default=os.path.join(DIST, 'Netflix.flatpak'))
ap.add_argument('--reuse-tree', action='store_true', help='do not rebuild the directory if --tree already exists')
ap.add_argument('--branch', default='stable')
ap.add_argument('--runtime-branch', default='25.08')
A = ap.parse_args()
APP_ID = A.app_id
WORK = os.path.join(DIST, 'flatpak')
BUILD = os.path.join(WORK, 'build')
REPO = os.path.join(WORK, 'repo')


def run(*a, **k):
    print('+', ' '.join(a))
    return subprocess.run(a, check=True, **k)


LAUNCHER = r'''#!/bin/sh
# Flatpak launcher. /app is read-only, so the app runs from a writable tree of links in $XDG_DATA_HOME/netflix;
# login (data), cache and downloaded UI chunks live in persistent folders next to it.
SRC=/app/vacuumflix
DATA="${XDG_DATA_HOME:-$HOME/.local/share}/netflix"
ROOT="$DATA/root"
mkdir -p "$DATA/data" "$DATA/cache/fonts" "$DATA/home" || exit 1

# ovl SRC DST: create DST (real directory) and link every entry of SRC that is not there yet
ovl() { mkdir -p "$2"; for e in "$1"/* "$1"/.[!.]*; do [ -e "$e" ] || [ -L "$e" ] || continue; n="${e##*/}"; [ -e "$2/$n" ] || [ -L "$2/$n" ] || ln -s "$e" "$2/$n"; done; }

rm -rf "$ROOT"; mkdir -p "$ROOT/port2" "$ROOT/tvui" || exit 1
for e in bin sys netflix; do ln -s "$SRC/$e" "$ROOT/$e"; done
for e in "$SRC"/port2/*; do n="${e##*/}"; case "$n" in data|cache) ;; *) ln -s "$e" "$ROOT/port2/$n" ;; esac; done

# data: boot policies (read-only) + the user's cookies/esn (writable, persistent)
ovl "$SRC/port2/data" "$DATA/data"; ln -s "$DATA/data" "$ROOT/port2/data"
# cache: fonts (writable) + splash frames (read-only); everything else is generated at run time
ovl "$SRC/port2/cache/fonts" "$DATA/cache/fonts"
for e in "$SRC"/port2/cache/*; do n="${e##*/}"; [ "$n" = fonts ] && continue; [ -e "$DATA/cache/$n" ] || [ -L "$DATA/cache/$n" ] || ln -s "$e" "$DATA/cache/$n"; done
ln -s "$DATA/cache" "$ROOT/port2/cache"

# tvui: the bundled UI scripts (read-only) plus chunks downloaded on demand (release/ and release/ext are writable)
for e in "$SRC"/tvui/*; do n="${e##*/}"; [ "$n" = apps ] || ln -s "$e" "$ROOT/tvui/$n"; done
for rel in "$SRC"/tvui/apps/*/*/release; do
  v="${rel%/release}"; ver="${v##*/}"; v2="${v%/*}"; app="${v2##*/}"
  mkdir -p "$ROOT/tvui/apps/$app/$ver" "$DATA/tvui/$app/$ver/release/ext"
  for e in "$v"/*; do n="${e##*/}"; [ "$n" = release ] || ln -s "$e" "$ROOT/tvui/apps/$app/$ver/$n"; done
  for e in "$rel"/*; do n="${e##*/}"; [ "$n" = ext ] && continue; [ -e "$DATA/tvui/$app/$ver/release/$n" ] || [ -L "$DATA/tvui/$app/$ver/release/$n" ] || ln -s "$e" "$DATA/tvui/$app/$ver/release/$n"; done
  [ -d "$rel/ext" ] && ovl "$rel/ext" "$DATA/tvui/$app/$ver/release/ext"
  ln -s "$DATA/tvui/$app/$ver/release" "$ROOT/tvui/apps/$app/$ver/release"
done

# writable HOME for cdmhost (the user's own Widevine L3 store lives in ~/.local/share/gibbon-cdm)
export HOME="$DATA/home"
export PATH="$ROOT/bin:$PATH" PKG_ROOT="$ROOT" PKG_NODE="$ROOT/bin/node" PKG_LAUNCHER=/app/bin/netflix WINDOW=1 NODESKTOPENTRY=1
# keep symlinks in node paths (otherwise __dirname would resolve to the read-only /app); NODE_OPTIONS also survives the app's own restarts
export NODE_OPTIONS="--preserve-symlinks --preserve-symlinks-main"
if [ -z "$SDL_VIDEODRIVER" ]; then
  if [ -n "$WAYLAND_DISPLAY" ]; then SDL_VIDEODRIVER=wayland; else SDL_VIDEODRIVER=x11; fi
  export SDL_VIDEODRIVER
fi
cd "$ROOT/port2/runtime" || exit 1
# absolute path through the link tree: with a relative host.js node would use the physical (read-only) cwd
exec "$ROOT/bin/node" "$ROOT/port2/runtime/host.js" "$@"
'''

DESKTOP = '''[Desktop Entry]
Type=Application
Name=Netflix
GenericName=Netflix
Exec=netflix
Icon={id}
Terminal=false
Categories=AudioVideo;Video;
StartupWMClass=netflix
'''

METAINFO = '''<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
  <id>{id}</id>
  <name>Netflix</name>
  <metadata_license>CC0-1.0</metadata_license>
  <project_license>LicenseRef-proprietary</project_license>
  <launchable type="desktop-id">{id}.desktop</launchable>
</component>
'''


def strip_tools():
    names = ('strip_comments.js', 'strip_comments.py')
    return all(os.path.exists(os.path.join(HERE, n)) for n in names)


def sanitize(root):
    p2 = os.path.join(root, 'port2')
    for f in (os.path.join(root, 'README.txt'),):
        if os.path.exists(f):
            os.remove(f)
    if not strip_tools():
        return
    node = os.environ.get('NODE', 'node')
    for f in sorted(glob.glob(os.path.join(p2, 'runtime', '*.js'))):
        run(node, os.path.join(HERE, 'strip_comments.js'), f, f + '.tmp')
        os.replace(f + '.tmp', f)
    for f in (os.path.join(p2, 'renderer', 'imgtext.py'), os.path.join(root, 'netflix')):
        run(sys.executable, os.path.join(HERE, 'strip_comments.py'), f, f + '.tmp')
        os.replace(f + '.tmp', f)


def main():
    os.makedirs(WORK, exist_ok=True)
    if not (A.reuse_tree and os.path.exists(os.path.join(A.tree, 'netflix'))):
        run(sys.executable, os.path.join(HERE, 'make_package.py'), A.tree, env=dict(os.environ, SKIP_SINGLE='1'))
    if os.path.exists(BUILD):
        shutil.rmtree(BUILD)
    run('flatpak', 'build-init', BUILD, APP_ID, 'org.freedesktop.Sdk', 'org.freedesktop.Platform', A.runtime_branch)
    files = os.path.join(BUILD, 'files')
    run('cp', '-a', '--reflink=auto', A.tree, os.path.join(files, 'vacuumflix'))
    sanitize(os.path.join(files, 'vacuumflix'))
    os.makedirs(os.path.join(files, 'bin'), exist_ok=True)
    launcher = os.path.join(files, 'bin', 'netflix')
    with open(launcher, 'w') as f:
        f.write(LAUNCHER)
    os.chmod(launcher, 0o755)
    share = os.path.join(files, 'share')
    os.makedirs(os.path.join(share, 'applications'), exist_ok=True)
    os.makedirs(os.path.join(share, 'metainfo'), exist_ok=True)
    with open(os.path.join(share, 'applications', APP_ID + '.desktop'), 'w') as f:
        f.write(DESKTOP.format(id=APP_ID))
    with open(os.path.join(share, 'metainfo', APP_ID + '.metainfo.xml'), 'w') as f:
        f.write(METAINFO.format(id=APP_ID))
    icons = os.path.join(PORT2, 'assets', 'icon')
    for sz in (16, 32, 48, 64, 128, 256, 512):
        src = os.path.join(icons, f'netflix-{sz}.png')
        if os.path.exists(src):
            d = os.path.join(share, 'icons', 'hicolor', f'{sz}x{sz}', 'apps')
            os.makedirs(d, exist_ok=True)
            shutil.copy2(src, os.path.join(d, APP_ID + '.png'))
    run('flatpak', 'build-finish', BUILD, '--command=netflix', '--share=network', '--share=ipc',
        '--socket=wayland', '--socket=fallback-x11', '--socket=pulseaudio', '--device=all')
    if os.path.exists(REPO):
        shutil.rmtree(REPO)
    run('flatpak', 'build-export', REPO, BUILD, A.branch)
    run('flatpak', 'build-bundle', REPO, A.out, APP_ID, A.branch, '--runtime-repo=https://dl.flathub.org/repo/flathub.flatpakrepo')
    h = hashlib.sha256()
    with open(A.out, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    with open(A.out + '.sha256', 'w') as f:
        f.write(f'{h.hexdigest()}  {os.path.basename(A.out)}\n')
    print(f'\nFlatpak ready: {A.out} ({os.path.getsize(A.out) // 1048576} MB)\nInstall: flatpak install --user {A.out}\nRun:     flatpak run {APP_ID}')


main()
