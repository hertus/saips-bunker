#!/usr/bin/env bash

# =========================================================================
# SAIPS BUNKER WEEKEND - LINUX KIOSK LAUNCHER
# =========================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
INDEX_FILE="$PROJECT_ROOT/index.html"
FILE_URI="file://$INDEX_FILE"

echo "=========================================================="
echo "  SAIPS BUNKER WEEKEND - SERVERLESS KIOSK LAUNCHER (LINUX)"
echo "=========================================================="

# 1. Deaktivieren von Bildschirmschoner und Standby unter X11 / Wayland
echo "[1/3] Deaktiviere Bildschirm-Timeout & Standby..."
if command -v xset >/dev/null 2>&1; then
  # X11 DPMS & Screen Saver abschalten
  xset s off || true
  xset -dpms || true
  xset s noblank || true
fi

# 2. Browser-Suche (Chromium, Google Chrome, Brave, MS Edge)
BROWSER_BIN=""
CANDIDATES=(
  "chromium"
  "chromium-browser"
  "google-chrome"
  "google-chrome-stable"
  "microsoft-edge"
  "microsoft-edge-stable"
  "brave-browser"
)

for b in "${CANDIDATES[@]}"; do
  if command -v "$b" >/dev/null 2>&1; then
    BROWSER_BIN="$b"
    break
  fi
done

# 3. Kiosk-Start
KIOSK_ARGS=(
  "--kiosk"
  "$FILE_URI"
  "--no-first-run"
  "--disable-pinch"
  "--overscroll-history-navigation=0"
  "--disable-features=TranslateUI"
  "--no-default-browser-check"
  "--disable-session-crashed-bubble"
  "--disable-infobars"
)

if [ -n "$BROWSER_BIN" ]; then
  echo "[2/3] Gefundener Chromium-Browser: $BROWSER_BIN"
  echo "[3/3] Starte Vollbild-Kiosk-Modus..."
  echo "      Datei: $FILE_URI"
  echo "      Hinweis: Beenden mit Alt+F4"
  exec "$BROWSER_BIN" "${KIOSK_ARGS[@]}"
else
  # Fallback: Firefox oder xdg-open
  if command -v firefox >/dev/null 2>&1; then
    echo "[2/3] Kein Chromium gefunden. Starte Firefox im Kiosk-Modus..."
    exec firefox --kiosk "$FILE_URI"
  elif command -v xdg-open >/dev/null 2>&1; then
    echo "[2/3] Kein Kiosk-Browser gefunden. Öffne Standard-Browser mit xdg-open..."
    exec xdg-open "$INDEX_FILE"
  else
    echo "Fehler: Kein passender Webbrowser gefunden. Bitte Chromium oder Firefox installieren."
    exit 1
  fi
fi

