#!/usr/bin/env bash
# Build static site and export each page as PDF for offline feedback (not for production deploy).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/feedback-pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

cd "$ROOT"
npm run build
mkdir -p "$OUT"

export_pdf() {
  local path="$1"
  local name="$2"
  local url="file://${ROOT}/dist${path}"
  echo "→ ${name}.pdf"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="${OUT}/${name}.pdf" \
    "$url" >/dev/null 2>&1
}

export_pdf "/index.html" "home"
export_pdf "/publications/index.html" "publications"
export_pdf "/biosignals/index.html" "biosignals"
export_pdf "/medical-device-ai/index.html" "medical-device-ai"
export_pdf "/neuroimaging-ml/index.html" "neuroimaging-ml"

echo ""
echo "PDFs written to: $OUT"
