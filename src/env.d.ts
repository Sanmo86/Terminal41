/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  // Set by src/components/CookieConsent.astro. Check this before loading
  // any future analytics script (Google Analytics, Vercel Analytics, etc.)
  // so it only runs after the visitor has accepted cookies.
  terminal41HasAnalyticsConsent?: () => boolean;
}
