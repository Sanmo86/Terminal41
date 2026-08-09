import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update this if you later connect a custom domain (needed for sitemap.xml
// + canonical URLs + og:image to resolve correctly).
const SITE_URL = 'https://terminal41.vercel.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Sharp is bundled with Astro and used automatically for local images
    // referenced via the content collections `image()` schema helper.
  },
});
