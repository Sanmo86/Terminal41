import { defineCollection, z } from 'astro:content';
import { REGIONS } from '../config/site';

const regionSlugs = REGIONS.map((r) => r.slug) as [string, ...string[]];

const airports = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // Core fields (as requested): title, airport, IATA code, city, country,
      // date, featured image, excerpt.
      title: z.string(),
      airport: z.string(), // full official airport name
      iataCode: z
        .string()
        .length(3)
        .transform((v) => v.toUpperCase()),
      city: z.string(),
      country: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image(),
      imageAlt: z.string(),
      excerpt: z.string().max(300),

      // Categorization
      region: z.enum(regionSlugs),
      tags: z.array(z.string()).default([]),

      // SEO overrides (optional — falls back to title/excerpt/image if omitted)
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),

      // Flags
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),

      // --- Reserved for future monetization ---------------------------
      // Not rendered anywhere yet (ADS_ENABLED is false in src/config/site.ts),
      // but present so per-article affiliate links can be added later
      // without touching the schema or component templates again.
      affiliateLinks: z
        .object({
          parking: z.string().url().optional(),
          lounge: z.string().url().optional(),
          esim: z.string().url().optional(),
          carRental: z.string().url().optional(),
        })
        .optional(),
    }),
});

export const collections = { airports };
