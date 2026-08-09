import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update this if the primary domain ever changes (needed for sitemap.xml
// + canonical URLs + og:image to resolve correctly).
const SITE_URL = 'https://www.terminal41.co';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // English is the default and stays unprefixed at existing URLs (already
  // indexed by Google — must not change). Spanish lives under /es/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
