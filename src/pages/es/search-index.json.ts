import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Spanish version of src/pages/search-index.json.ts — see that file for
// the rationale on keeping this index small.
export const GET: APIRoute = async () => {
  const entries = await getCollection('airports', ({ data }) => !data.draft && data.lang === 'es');

  const index = entries.map((entry) => ({
    slug: entry.data.articleSlug,
    title: entry.data.title,
    airport: entry.data.airport,
    iataCode: entry.data.iataCode,
    city: entry.data.city,
    country: entry.data.country,
    region: entry.data.region,
    excerpt: entry.data.excerpt,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
