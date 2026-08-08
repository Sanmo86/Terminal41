import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Small static JSON index used by the client-side search box
// (src/pages/search.astro). Kept intentionally tiny — no title/body text,
// just the fields we filter/display on — so it stays fast to fetch even as
// the article count grows into the hundreds.
export const GET: APIRoute = async () => {
  const entries = await getCollection('airports', ({ data }) => !data.draft);

  const index = entries.map((entry) => ({
    slug: entry.slug,
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
