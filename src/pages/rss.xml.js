import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';

export async function GET(context) {
  const entries = await getCollection('airports', ({ data }) => !data.draft);

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.date,
      link: `/airports/${entry.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
