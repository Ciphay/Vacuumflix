# Netflix for Linux (unofficial)

Runs the original Netflix **TV user interface** on a Linux desktop, with video and audio playback (Widevine L3), without
Android or any emulator. A small runtime written for this project (Node.js/V8 + a native window) provides the platform
the TV UI expects, and the Netflix servers are the data source - similar to how Kodi uses a service as a data source.

This is an independent project. It is **not** affiliated with, endorsed or supported by Netflix, Inc. You need your own
Netflix subscription. "Netflix" is a trademark of Netflix, Inc.

## What is in this repository

| Path | Purpose |
|---|---|
| `port2/runtime/` | The platform runtime (JavaScript): `host.js` runs the UI, `media.js` plays video/audio, `cdm*.js`/`wvbridge.js`/`webcrypto.js` handle DRM and crypto. |
| `port2/renderer/` | `scene_viewer.c` (SDL2 + OpenGL ES window that draws the UI) and `imgtext.py` (image decoding and text rasterisation). |
| `port2/cdmhost/` | `cdmhost.cpp`, a host for the Widevine CDM outside a browser, plus the CDM interface headers. |
| `port2/cdm/` | The Widevine CDM library (`libwidevinecdm.so`), distributed by Google, with its own `LICENSE`. |
| `port2/splash/` | Error-screen script and texts (73 languages). |
| `port2/assets/` | App icons, UI fonts and the pre-rendered boot animation (`splash2.tar.xz`). |
| `port2/data/` | Boot policy responses used by the runtime. |
| `port2/tools/` | `make_package.py` and `make_flatpak.py`. |
| `tvui/` | The Netflix TV UI scripts, pinned to one release (see below). |

### Third-party material

`tvui/`, `port2/splash/` and the boot animation come from Netflix; `port2/cdm/` comes from Google. They are included so
that a build never depends on a remote server (Netflix can change or block routes at any time) and so the exact
versions the runtime was tested with stay available. Their owners keep all rights; check that you may redistribute them
before publishing a fork.

## Building

Build machine: x86-64 Linux with `gcc`, `g++`, `pkg-config`, SDL2 development files, `node`, `ffmpeg`, `curl`,
`python3` with Pillow, `xz`, and the Noto fonts (`noto-fonts`, `noto-fonts-cjk`). For the Flatpak also `flatpak` with the
`org.freedesktop.Sdk` and `org.freedesktop.Platform` 25.08 runtimes.

```sh
./build.sh package   # dist/netflix-port/ (folder) and dist/Netflix (single self-extracting executable)
./build.sh flatpak   # dist/Netflix.flatpak
```

The package bundles node, ffmpeg, curl, Python+Pillow, their libraries and glibc, so it needs nothing installed on the
target besides the items below. The native programs are compiled during the build.

## Running

Target machine: Linux x86-64, a video driver with OpenGL ES/EGL (Mesa or NVIDIA), a PulseAudio-compatible sound server
(PulseAudio or PipeWire) and internet access.

```sh
./Netflix                                   # single executable (extracts to ~/.local/share/Netflix on first run)
flatpak install --user Netflix.flatpak      # or the Flatpak
flatpak run io.github.netflixport.Netflix
```

Notes:
- Login, device id and cache are stored per user (`~/.local/share/Netflix` or `~/.var/app/io.github.netflixport.Netflix`).
  Never share `cookies.json`.
- The Widevine CDM provisions itself (L3) on first playback; maximum quality is therefore what L3 allows.
- The interface language follows the system language (`LC_ALL`, `LC_MESSAGES`, `LANG`, `LANGUAGE`; override with
  `NETFLIX_LANG`). Before signing in, Netflix offers only the languages of the country it detects from your IP.
  After signing in the profile language applies.
- Game controllers work (D-pad/analog stick, A, B, X, Y, bumpers). Keyboard: arrows, Enter, Backspace.
- Useful switches: `SDL_VIDEODRIVER=x11` (or `wayland`), `JAR_FILE=<file>` to use another cookie file.
