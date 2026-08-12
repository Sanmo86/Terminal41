// Central place for site-wide constants. Import this everywhere instead of
// hardcoding strings, so a rebrand or domain change only happens in one file.

export const SITE = {
  name: 'Terminal41',
  url: 'https://www.terminal41.co',
  defaultOgImage: '/og-default.svg',
  twitter: '@terminal41',
  // Used on About, Legal Notice, Privacy Policy, and Cookie Policy pages.
  legalName: 'The Terminal41 Team',
  contactEmail: 'sanmo8604@gmail.com',
};

// Locale metadata (og:locale, <html lang>, etc.) — page copy (tagline,
// description) lives in src/i18n/ui.ts alongside the rest of the UI strings.
export const LOCALE_META = {
  en: { ogLocale: 'en_US' },
  es: { ogLocale: 'es_ES' },
} as const;

// Regions used for the category/tag system. Keep the `slug` stable — it is
// used in URLs (/regions/[slug]) and in each article's frontmatter.
export const REGIONS = [
  { slug: 'europe', label: { en: 'Europe', es: 'Europa' } },
  { slug: 'americas', label: { en: 'Americas', es: 'América' } },
  { slug: 'asia', label: { en: 'Asia', es: 'Asia' } },
  { slug: 'africa', label: { en: 'Africa', es: 'África' } },
  { slug: 'middle-east', label: { en: 'Middle East', es: 'Oriente Medio' } },
  { slug: 'oceania', label: { en: 'Oceania', es: 'Oceanía' } },
] as const;

export type RegionSlug = (typeof REGIONS)[number]['slug'];

export function regionLabel(slug: string, lang: 'en' | 'es' = 'en'): string {
  return REGIONS.find((r) => r.slug === slug)?.label[lang] ?? slug;
}

// Shared per-region accent colors — used by the homepage world map
// (marker + legend dots) and by the build-time OG image generator
// (src/pages/og/[lang]/[slug].png.ts), so both stay visually consistent.
export const REGION_COLORS: Record<string, string> = {
  europe: '#2563eb',
  americas: '#dc2626',
  asia: '#d97706',
  africa: '#16a34a',
  'middle-east': '#9333ea',
  oceania: '#0891b2',
};

export function regionColor(slug: string): string {
  return REGION_COLORS[slug] ?? '#64748b';
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
