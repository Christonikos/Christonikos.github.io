#!/usr/bin/env bash
# Copy CV from project root into website/public/ for deploy.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
PUB="$(cd "$(dirname "$0")/.." && pwd)/public"

if [[ -f "$ROOT/christos-zacharopoulos-cv.pdf" ]]; then
  cp "$ROOT/christos-zacharopoulos-cv.pdf" "$PUB/christos-zacharopoulos-cv.pdf"
  echo "→ public/christos-zacharopoulos-cv.pdf"
elif [[ -f "$ROOT/christos-zacharopoulos-cv.docx" ]]; then
  cp "$ROOT/christos-zacharopoulos-cv.docx" "$PUB/christos-zacharopoulos-cv.docx"
  echo "→ public/christos-zacharopoulos-cv.docx (export PDF to project root for .pdf link)"
else
  echo "No christos-zacharopoulos-cv.pdf or .docx at project root." >&2
  exit 1
fi
