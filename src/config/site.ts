// Central place for site-wide constants. Import this everywhere instead of
// hardcoding strings, so a rebrand or domain change only happens in one file.

export const SITE = {
  name: 'Terminal41',
  tagline: 'Your gate to smarter travel',
  description:
    'Terminal41 is a guide to airports around the world — terminals, airlines, parking, wifi, lounges, duty-free, and everything you need for a smooth layover.',
  url: 'https://www.terminal41.co',
  defaultOgImage: '/og-default.svg',
  twitter: '@terminal41',
  locale: 'en-US',
  // Used on About, Legal Notice, Privacy Policy, and Cookie Policy pages.
  legalName: 'The Terminal41 Team',
  contactEmail: 'sanmo8604@gmail.com',
};

// Regions used for the category/tag system. Keep the `slug` stable — it is
// used in URLs (/regions/[slug]) and in each article's frontmatter.
export const REGIONS = [
  { slug: 'europe', label: 'Europe' },
  { slug: 'americas', label: 'Americas' },
  { slug: 'asia', label: 'Asia' },
  { slug: 'africa', label: 'Africa' },
  { slug: 'middle-east', label: 'Middle East' },
  { slug: 'oceania', label: 'Oceania' },
] as const;

export type RegionSlug = (typeof REGIONS)[number]['slug'];

export function regionLabel(slug: string): string {
  return REGIONS.find((r) => r.slug === slug)?.label ?? slug;
}

// --- Analytics ---------------------------------------------------------
// Google Analytics 4 measurement ID. The actual gtag.js script only loads
// once a visitor accepts cookies (see src/components/Analytics.astro and
// CookieConsent.astro) — never unconditionally. Leave blank to disable.
export const GA_MEASUREMENT_ID = 'G-9WTM8N781Y';

// --- Monetization (disabled for now) ---------------------------------
// Flip this to true once you're ready to show ad slots. Individual slots
// are rendered by <AdSlot /> (src/components/AdSlot.astro), which already
// reads this flag — no template changes needed later.
export const ADS_ENABLED = false;

// Optional affiliate program placeholders. Leave blank until you have real
// partner links; the article schema already has optional fields ready to
// hold per-airport affiliate URLs (parking, lounge access, esim, etc.).
export const AFFILIATE_LINKS = {
  parking: '',
  lounge: '',
  esim: '',
  carRental: '',
};
