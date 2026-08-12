import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Data feed for the /compare tool (src/pages/compare.astro). Richer than
// search-index.json — includes the quickFacts/security/transportOptions/
// amenities/hubAirlines fields needed to build a side-by-side comparison
// client-side. English only — see src/pages/es/compare-index.json.ts for
// the Spanish version.
export const GET: APIRoute = async () => {
  const entries = await getCollection('airports', ({ data }) => !data.draft && data.lang === 'en');

  const index = entries
    .filter((entry) => entry.data.quickFacts && entry.data.security && entry.data.arrivalGuidance)
    .map((entry) => {
      const { data } = entry;
      return {
        slug: data.articleSlug,
        airport: data.airport,
        iataCode: data.iataCode,
        city: data.city,
        country: data.country,
        region: data.region,
        image: data.image,
        imageAlt: data.imageAlt,
        quickFacts: data.quickFacts,
        security: data.security,
        cheapestTransport: data.transportOptions?.[0] ?? null,
        amenities: data.amenities ?? [],
        hubAirlines: data.hubAirlines ?? [],
        href: `/airports/${data.articleSlug}`,
      };
    });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
