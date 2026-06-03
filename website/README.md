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

## CV PDF

Place the latest CV at `public/christos-zacharopoulos-cv.pdf` for the download link on the homepage.

## Deploy

GitHub Actions deploys to GitHub Pages on push to `main` when `website/**` changes. Set `site` in `astro.config.mjs` when attaching a custom domain.
