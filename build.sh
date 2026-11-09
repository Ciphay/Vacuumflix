#!/bin/sh
cd "$(dirname "$0")" || exit 1
self="$(pwd)/$(basename "$0")"
if [ ! -t 0 ] && [ -z "$VACUUMFLIX_TERM" ]; then
  export VACUUMFLIX_TERM=1
  for t in konsole gnome-terminal xfce4-terminal kitty alacritty xterm; do
    command -v "$t" >/dev/null 2>&1 || continue
    case "$t" in
      gnome-terminal) exec "$t" -- sh "$self" "$@" ;;
      *) exec "$t" -e sh "$self" "$@" ;;
    esac
  done
fi
what="${1:-flatpak}"
pause() { if [ -z "$1" ] && [ -t 0 ]; then printf "Press Enter to close."; read -r _; fi; return 0; }
case "$what" in
  package)
    echo "[1/1] Building package..."
    python3 port2/tools/make_package.py || { echo "Build failed."; pause "$1"; exit 1; }
    ;;
  flatpak)
    echo "[1/2] Creating Flatpak (this can take a few minutes)..."
    python3 port2/tools/make_flatpak.py || { echo "Build failed."; pause "$1"; exit 1; }
    echo "[2/2] Installing..."
    flatpak install --user -y dist/Netflix.flatpak || { echo "Install failed."; pause "$1"; exit 1; }
    echo "Installed. Run with: flatpak run io.vacuumflix.Vacuumflix"
    ;;
  *) echo "usage: $0 [flatpak|package]" >&2; exit 1 ;;
esac
pause "$1"
