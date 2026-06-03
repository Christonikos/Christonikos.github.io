# Personal website

Static site for [Christos Zacharopoulos, Ph.D.](https://christonikos.github.io).

Content is sourced from the project wiki (`../wiki/`). Design follows wiki guidance: clarity over polish, crawlable HTML, minimal dependencies.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`

## CV

Place the latest CV at the **project root** (`../christos-zacharopoulos-cv.pdf` or `.docx`), then:

```bash
../website/scripts/sync-cv-from-root.sh
```

Update `links.cv` in `src/data/site.ts` if you switch between PDF and DOCX.

## Deploy (GitHub Pages)

**Always deploy from the `gh-pages` branch** — not GitHub Actions.

1. **One-time (GitHub repo):** Settings → Pages → Build and deployment → **Deploy from a branch** → `gh-pages` / `/(root)`.
2. **After each site change:**

```bash
npm run deploy
```

This builds `dist/`, force-pushes to `gh-pages`, and updates https://christonikos.github.io/ within a minute or two.

Set `site` in `astro.config.mjs` when attaching a custom domain.
