# Vacuumflix
- Netflix with its original TV/console interface, made for **SteamOS** and **Bazzite**
- Runs on any Linux desktop and works with a game controller
- Uses **Widevine L3** and plays back at up to **1080p**, depending on your network
- Early version, may contain bugs. Feedback is welcome!

## Start

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/01d5e50c-dbda-460b-9ea3-1b9eb8c9be63" />

## Profile

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/d7b29c24-6df5-4e20-8773-f934e622f968" />

## Home

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/799ebd09-cc6e-432a-9759-3804e7352f15" />

## Player

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/1361ced6-efc0-41e9-bf30-a5ff547d3b10" />

## Installation

Download the Flatpak or the .tar.gz file from the [releases page](https://github.com/Ciphay/Vacuumflix/releases/tag/V1.0) and install it:

```sh
flatpak install --user Netflix.flatpak
flatpak run io.vacuumflix.Vacuumflix
```

This is the recommended way, especially on **SteamOS** and **Bazzite**, whose root file systems are read-only.

Or build it yourself:

```sh
git clone https://github.com/Ciphay/Vacuumflix.git
cd Vacuumflix
./build.sh            # builds the Flatpak and installs it
flatpak run io.vacuumflix.Vacuumflix
./build.sh package    # optional: standalone folder + single executable in dist/
```

Building needs `git`, `gcc`, `g++`, `pkg-config`, SDL2 and OpenGL ES development files, `node`, `ffmpeg`, `curl`, `xz`, `python3` with Pillow, the Noto fonts, and `flatpak` with the 25.08 runtimes:

```sh
flatpak install --user flathub org.freedesktop.Platform//25.08 org.freedesktop.Sdk//25.08
```

On Arch-based distros (tested on CachyOS):

```sh
sudo pacman -S git base-devel sdl2 nodejs ffmpeg curl python-pillow xz noto-fonts noto-fonts-cjk flatpak
```

Building on an immutable distro such as Bazzite has not been tested; use a `distrobox` container if you try.

## Disclaimer

Vacuumflix is an unofficial client. It is not affiliated with, endorsed or supported by Netflix, Inc. "Netflix" is a trademark of Netflix, Inc.

- A valid Netflix subscription is required. Vacuumflix does not provide, unlock or bypass access to any content.
- Playback uses Widevine L3 (software DRM), so the maximum quality is 1080p. Vacuumflix does not remove, break or work around DRM.
- The Netflix TV interface scripts and the boot animation belong to Netflix, Inc.; the Widevine CDM belongs to Google. They are included only so the app works as tested, and their owners keep all rights.
- Netflix can change its servers or interface at any time, which may break parts of the app until it is updated.
