# Can I Pet Your Dog (or cat)

A responsive, static homepage for independent pet care in Durham, North Carolina. This handoff preserves the current Sites mockup while removing its hosting-specific runtime. All production photos are included as text-safe Base64 sources, materialized locally before development or builds, and the project exports plain static files that GitHub Pages can serve.

Visual reference: https://can-i-pet-your-dog.happyfarmer.chatgpt.site

## Before launch

1. Open `app/page.tsx`.
2. Replace `REQUEST_FORM_URL` with the public URL of your Google Form.
3. Confirm the Rover rating, review count, service area, and wording.

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

The workflow automatically handles normal project URLs such as `username.github.io/repository-name/` and root user-site repositories such as `username.github.io`. If you later attach a custom domain to a project repository, set `PAGES_BASE_PATH` to an empty value in the workflow before rebuilding.

The same base-path setting is applied to scripts, fonts, and every photo, so the site can live inside a repository subdirectory without broken assets.

## Main files

- `app/page.tsx` — page copy, services, links, and image assignments
- `app/globals.css` — colors, layout, typography, and phone styles
- `assets/source/` — text-safe Base64 sources for local photos and fonts
- `scripts/materialize-assets.mjs` — recreates binary assets before development or builds
- `.github/workflows/deploy-pages.yml` — automatic GitHub Pages deployment
- `next.config.ts` — static export and repository-path support

No database, payment processor, or contact-form backend is included. The request button is deliberately left ready for the Google Form URL.
