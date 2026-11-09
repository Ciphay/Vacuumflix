#!/bin/sh
set -e
cd "$(dirname "$0")"
case "$1" in
  package) python3 port2/tools/make_package.py ;;
  flatpak) python3 port2/tools/make_flatpak.py ;;
  *) echo "usage: $0 package|flatpak" >&2; exit 1 ;;
esac
