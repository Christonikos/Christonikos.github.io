#!/usr/bin/env bash
# Build the site and push dist/ to GitHub Pages (user site: username.github.io repo).
# Usage:
#   GITHUB_PAGES_REPO=git@github.com:Christonikos/Christonikos.github.io.git ./scripts/deploy-github-pages.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="${GITHUB_PAGES_REPO:-}"

if [[ -z "$REPO" ]]; then
  echo "Set GITHUB_PAGES_REPO, e.g.:" >&2
  echo "  export GITHUB_PAGES_REPO=git@github.com:Christonikos/Christonikos.github.io.git" >&2
  exit 1
fi

cd "$ROOT"
npm run build

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

git -C "$WORK" init -q
git -C "$WORK" checkout -q -b gh-pages 2>/dev/null || git -C "$WORK" checkout -q gh-pages
cp -R dist/. "$WORK/"
touch "$WORK/.nojekyll"
git -C "$WORK" add -A
git -C "$WORK" commit -q -m "Deploy site $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "Pushing to $REPO (branch gh-pages)…"
git -C "$WORK" push -f "$REPO" gh-pages:gh-pages

echo "Done. Enable GitHub Pages → Deploy from branch gh-pages / (root)."
echo "User site URL: https://christonikos.github.io/ (after DNS/propagation)"
