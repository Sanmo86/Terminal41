# Terminal41

> Your gate to smarter travel — an Astro-powered blog of in-depth airport guides.

Static blog built with [Astro](https://astro.build). Each article covers one airport: terminals,
airlines, how to get there, parking, wifi, best times to arrive, where to eat, lounges,
duty-free shopping, and long-layover tips.

## ⚠️ Before you start: install Node.js

This project was scaffolded on a machine that doesn't have **Node.js** installed, so none of the
commands below have been run yet — you'll need to do that on your own machine.

1. Install Node.js **20 LTS or newer** from [nodejs.org](https://nodejs.org) (or via `nvm`/`nvm-windows`).
2. Confirm it worked:
   ```bash
   node -v
   npm -v
   ```
3. From the project folder, install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
   Open the printed local URL (usually `http://localhost:4321`) — you should see the homepage
   with the three example articles (Madrid-Barajas, Barcelona-El Prat, Amsterdam Schiphol).

## Project structure

```
terminal41/
├─ src/
│  ├─ components/       Reusable UI: Header, Footer, ArticleCard, TableOfContents,
│  │                     SearchBox logic (in search.astro), RegionBadge, AdSlot
│  ├─ config/site.ts     Site name, tagline, regions list, ads/affiliate flags
│  ├─ content/
│  │  ├─ config.ts       Content collection schema (frontmatter validation)
│  │  └─ airports/        One folder per article: index.md + cover image
│  ├─ layouts/
│  │  ├─ BaseLayout.astro     Shared <head>, header, footer
│  │  └─ ArticleLayout.astro  Article page: hero image, meta, TOC sidebar, tags
│  ├─ pages/
│  │  ├─ index.astro              Homepage (article grid)
│  │  ├─ airports/[slug].astro    Individual article page (/airports/madrid-barajas)
│  │  ├─ regions/index.astro      List of regions
│  │  ├─ regions/[region].astro   Articles filtered by region
│  │  ├─ search.astro             Client-side search page
│  │  ├─ search-index.json.ts     JSON endpoint powering search
│  │  ├─ rss.xml.js               RSS feed
│  │  └─ 404.astro
│  └─ styles/global.css   Tailwind v4 + typography plugin + design tokens
├─ public/
│  ├─ robots.txt
│  ├─ favicon.svg
│  └─ og-default.svg      Fallback social-share image
├─ astro.config.mjs        Site URL, sitemap integration, Tailwind Vite plugin
└─ package.json
```

Astro's `@astrojs/sitemap` integration generates `sitemap-index.xml` automatically at build time —
nothing to maintain by hand.

## Adding a new airport article

1. Create a new folder: `src/content/airports/<slug>/` (the folder name becomes the URL, e.g.
   `src/content/airports/london-heathrow/` → `/airports/london-heathrow`).
2. Add an `index.md` with this frontmatter (see the 3 example articles for a full template):

   ```md
   ---
   title: "London Heathrow Airport: The Complete Traveler's Guide"
   airport: "Heathrow Airport"
   iataCode: "LHR"
   city: "London"
   country: "United Kingdom"
   date: 2026-08-10
   image: "./cover.jpg"
   imageAlt: "Heathrow Airport terminal building"
   excerpt: "One or two sentences summarizing the airport — shown on cards and in search results."
   region: "europe"   # europe | americas | asia | africa | middle-east | oceania
   tags: ["uk", "ba-hub"]
   featured: false
   ---

   ## Overview
   ...

   ## Terminals
   ...
   ```

3. Add a real photo as `cover.jpg` (or `.png`/`.webp`) next to `index.md`. Astro automatically
   resizes and optimizes it (via `astro:assets` + Sharp) wherever it's used — homepage card,
   article hero, and social-share image. The example articles use placeholder SVG graphics;
   swap them for real photography whenever you have it.
4. Headings (`##`, `###`) automatically populate the table of contents on the article page — no
   extra config needed.

## SEO

- Per-article `<title>`, meta description, and `og:image` are generated automatically from
  frontmatter (`title`/`seoTitle`, `excerpt`/`seoDescription`, `image`) — see
  [`src/components/BaseHead.astro`](src/components/BaseHead.astro).
- `sitemap-index.xml` and `robots.txt` are already wired up.
- Update `SITE.url` in [`src/config/site.ts`](src/config/site.ts) **and** `site` in
  [`astro.config.mjs`](astro.config.mjs) **and** the `Sitemap:` line in
  [`public/robots.txt`](public/robots.txt) once you have a real domain — all three need to match.

## Monetization (disabled for now, ready later)

- `ADS_ENABLED` in `src/config/site.ts` is `false`. Ad slots (`<AdSlot />`) are already placed in
  the homepage and every article (top, bottom, sidebar) but render nothing while the flag is off.
- Flip `ADS_ENABLED` to `true` and drop your ad network's script into
  [`src/components/AdSlot.astro`](src/components/AdSlot.astro) — no other files need to change.
- The article schema (`src/content/config.ts`) already has an optional `affiliateLinks` object
  (parking, lounge, esim, car rental) ready for per-article affiliate URLs whenever you want them.

## Deploying to Vercel or Netlify (both free)

Astro's static output works on either platform with **zero extra configuration** — no adapter
needed. Pick whichever you prefer.

### 1. Push the project to GitHub

```bash
cd terminal41
git init
git add .
git commit -m "Initial commit: Terminal41 blog"
```

Create a new empty repository on GitHub (no README/gitignore — you already have them), then:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/terminal41.git
git push -u origin main
```

### 2a. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, select your `terminal41` repo.
3. Vercel auto-detects Astro — leave the default build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
5. Optional: add a custom domain under **Project → Settings → Domains**.

### 2b. Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **Add new site → Import an existing project**, select your `terminal41` repo.
3. Netlify auto-detects Astro — confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. You'll get a live `*.netlify.app` URL shortly after.
5. Optional: add a custom domain under **Site configuration → Domain management**.

### After deploying

- Every `git push` to `main` triggers an automatic rebuild + redeploy on both platforms.
- Once you have your final domain, update `SITE.url`/`astro.config.mjs`/`robots.txt` as noted in
  the SEO section above, commit, and push.

## Tech stack

- [Astro](https://astro.build) 5 (static output)
- [Tailwind CSS](https://tailwindcss.com) 4 (via `@tailwindcss/vite`) + `@tailwindcss/typography`
  for long-form article styling
- Markdown content collections with a validated frontmatter schema (Zod)
- Vanilla JS for the client-side search box — no UI framework dependency
