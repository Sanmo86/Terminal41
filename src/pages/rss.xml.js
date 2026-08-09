import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';
import { ui } from '../i18n/ui';

// English only — mirrors the fact that / is the English site root.
export async function GET(context) {
  const entries = await getCollection('airports', ({ data }) => !data.draft && data.lang === 'en');

  return rss({
    title: SITE.name,
    description: ui.en['home.description'],
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/airports/${entry.data.articleSlug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
