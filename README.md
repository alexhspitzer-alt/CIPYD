# Can I Pet Your Dog (or cat)

A responsive, static homepage for Alex and Morgan’s pet-care partnership in Durham, North Carolina. The project preserves the current visual identity while exporting plain static files that GitHub Pages can serve. Included production photos are stored as text-safe Base64 sources and materialized locally before development or builds.

Visual reference: https://can-i-pet-your-dog.happyfarmer.chatgpt.site

## Before launch

1. Open `app/page.tsx`.
2. Replace `REQUEST_FORM_URL` with the public URL of your Google Form.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Then open the local address printed by Next.js.

## Verify the production export

```bash
npm test
```

The finished static site is written to `out/`.

## Publish with GitHub Pages

1. Create a GitHub repository and put the contents of this folder at the repository root.
2. Push the files to the `main` branch.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source if GitHub has not selected it automatically.
4. The included workflow builds and publishes the site on every push to `main`.

If Pages is configured to **Deploy from a branch** instead, select the repository root. The committed `index.html` is a standalone branch-deployment entry point and loads its text-safe assets directly. Regenerate it after editing the page or CSS with `npm run branch-page`.

The workflow publishes the site at the custom-domain root, `https://petyour.dog/`, with an empty `PAGES_BASE_PATH`. The `CNAME` file is included in both branch-based and GitHub Actions deployments.

Any root-level Microsoft ownership file matching `ms*.txt.json` is copied into the exported Pages artifact so the verification URL remains reachable after an Actions deployment.

## Main files

- `app/page.tsx` — page copy, services, links, and image assignments
- `app/globals.css` — colors, layout, typography, and phone styles
- `assets/source/` — text-safe Base64 sources for local photos and fonts
- `scripts/materialize-assets.mjs` — recreates binary assets before development or builds
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment
- `next.config.ts` — static export and repository-path support

No database, payment processor, or contact-form backend is included. The request button is deliberately left ready for the Google Form URL.
