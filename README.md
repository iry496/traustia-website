# Traustia

Production-quality public website for Traustia, a biomedical research and evidence-validation company.

The site is a static React + TypeScript + Vite application. It has no backend, tracking, cookies, external form processor, or paid runtime dependency.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production site is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Editable company information

Founders can update the main company content in one place:

`src/config/siteData.ts`

This file contains the contact email, social links, navigation, capabilities, research projects, founder biographies, expertise, and future-domain placeholder. The longer narrative sections live in `src/components/TraustiaSite.tsx`; shared visual styles live in `src/styles.css`.

### Configure contact details

Founder addresses are centralized in `contactEmails` inside `src/config/siteData.ts`. The primary `contactEmail`, founder cards, contact directory, and collaboration links all read from that configuration.

The contact text box is intentionally backend-free: it composes a new message in the visitor’s email application and does not store or transmit form data through the website.

Add the future LinkedIn and GitHub URLs in `socialLinks` when those profiles are ready.

### Add founder photos

1. Create `public/team/`.
2. Add optimized WebP portraits, ideally at least 900 × 1100 px.
3. In each founder entry in `src/config/siteData.ts`, set `photo` to a relative public path such as:

```ts
photo: "team/iris-yang.webp"
```

Blank values intentionally render designed portrait placeholders; no artificial headshots are used.

## GitHub Pages deployment

The repository includes the official GitHub Pages Actions workflow at `.github/workflows/deploy.yml`. It automatically handles either a project site (`USERNAME.github.io/REPOSITORY/`) or a user/organization site (`USERNAME.github.io/`).

1. Create a GitHub repository and push this project to its `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`, or open **Actions → Deploy Traustia to GitHub Pages → Run workflow**.
5. Wait for the build and deploy jobs to finish. The deployment URL appears in the workflow summary and Pages settings.

The workflow runs lint, type checks as part of the build, compiles the correct repository base path, generates canonical/Open Graph URLs, creates `robots.txt` and `sitemap.xml`, and publishes `dist/`.

## Custom domain

The production site uses `https://traustia.com/`. GitHub Pages receives the
domain from `public/CNAME`, and the deployment workflow builds with:

```bash
CUSTOM_DOMAIN=true \
VITE_BASE_PATH=/ \
VITE_SITE_URL=https://traustia.com/ \
npm run build
```

The apex DNS records must point to GitHub Pages, and `www` should be a CNAME to
`iry496.github.io`. HTTPS can be enforced after GitHub finishes provisioning
the certificate.

## Brand assets and SEO

- `public/favicon.svg` — original evidence-node “T” brand mark
- `public/og.png` — 1200 × 630 Traustia social preview
- `index.html` — title, description, Open Graph, and X card metadata
- `vite.github.config.ts` — base-path, canonical URL, robots, and sitemap generation

## Content and claims

The site intentionally avoids customer, publication, grant, partnership, regulatory, clinical-validation, and institutional-endorsement claims. Traustia Evidence Intelligence is explicitly identified as research and development.

© 2026 Traustia. All rights reserved. No open-source license is granted.
