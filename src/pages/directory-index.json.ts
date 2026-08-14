import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { parseDistanceKm, parseMinutesLowerBound, distanceBucket, securityBucket, hasRailTransit } from '../lib/airportMetrics';

// Data feed for the /directory faceted filter (src/pages/directory.astro).
// Facet buckets (distance/security/rail) are computed here at build time —
// same conservative parsers used by /rankings — so the client only ever
// filters on precomputed fields, no text-parsing in the browser.
// English only — see src/pages/es/directory-index.json.ts for the Spanish
// version.
export const GET: APIRoute = async () => {
  const entries = await getCollection('airports', ({ data }) => !data.draft && data.lang === 'en');

  const index = entries
    .filter((entry) => entry.data.quickFacts)
    .map((entry) => {
      const { data } = entry;
      return {
        slug: data.articleSlug,
        title: data.title,
        airport: data.airport,
        iataCode: data.iataCode,
        city: data.city,
        country: data.country,
        region: data.region,
        image: data.image,
        imageAlt: data.imageAlt,
        distanceBucket: distanceBucket(parseDistanceKm(data.quickFacts?.distanceToCity)),
        securityBucket: securityBucket(parseMinutesLowerBound(data.security?.typeATypical)),
        hasRail: hasRailTransit(data.transportOptions),
        href: `/airports/${data.articleSlug}`,
      };
    });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
