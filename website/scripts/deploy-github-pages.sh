#!/usr/bin/env bash
# Build and publish to GitHub Pages via the gh-pages branch (not GitHub Actions).
#
# Repo Settings → Pages → Build and deployment:
#   Source: Deploy from a branch
#   Branch: gh-pages / (root)
#
# Usage:
#   ./scripts/deploy-github-pages.sh
#   GITHUB_PAGES_REPO=git@github.com:YOU/Christonikos.github.io.git ./scripts/deploy-github-pages.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="${GITHUB_PAGES_REPO:-git@github.com:Christonikos/Christonikos.github.io.git}"

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

echo "Published. Live after Pages propagates: https://christonikos.github.io/"
