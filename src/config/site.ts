// Central place for site-wide constants. Import this everywhere instead of
// hardcoding strings, so a rebrand or domain change only happens in one file.

export const SITE = {
  name: 'Terminal41',
  tagline: 'Your gate to smarter travel',
  description:
    'Terminal41 is a guide to airports around the world — terminals, airlines, parking, wifi, lounges, duty-free, and everything you need for a smooth layover.',
  url: 'https://terminal41.vercel.app',
  defaultOgImage: '/og-default.svg',
  twitter: '@terminal41',
  locale: 'en-US',
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
