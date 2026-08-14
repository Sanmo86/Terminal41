import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { parseDistanceKm, parseMinutesLowerBound, distanceBucket, securityBucket, hasRailTransit } from '../../lib/airportMetrics';

// Spanish version of src/pages/directory-index.json.ts — see that file for
// the field-by-field explanation.
export const GET: APIRoute = async () => {
  const entries = await getCollection('airports', ({ data }) => !data.draft && data.lang === 'es');

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
        href: `/es/airports/${data.articleSlug}`,
      };
    });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
