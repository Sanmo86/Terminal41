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

      // --- Quick Facts stat card (optional — card is skipped if absent) ---
      quickFacts: z
        .object({
          passengers: z.string(), // e.g. "60 million/year"
          terminals: z.string(), // e.g. "4"
          distanceToCity: z.string(), // e.g. "13 km / 8 mi"
        })
        .optional(),

      // --- Interactive arrival-time helper (optional — widget is skipped
      // if absent). typeA/typeB let each article use its own framing
      // (Schengen vs non-Schengen, or domestic vs international).
      security: z
        .object({
          typeALabel: z.string(),
          typeATypical: z.string(),
          typeAPeak: z.string(),
          typeBLabel: z.string(),
          typeBTypical: z.string(),
          typeBPeak: z.string(),
        })
        .optional(),
      arrivalGuidance: z
        .object({
          typeA: z.string(),
          typeB: z.string(),
        })
        .optional(),

      // --- Transport options + amenities, rendered as responsive HTML
      // cards (not images) so the text stays legible on mobile. ---------
      transportOptions: z
        .array(
          z.object({
            label: z.string(),
            price: z.string(),
            time: z.string(),
            note: z.string().optional(),
          })
        )
        .optional(),
      amenities: z
        .array(
          z.object({
            label: z.string(),
            detail: z.string(),
          })
        )
        .optional(),

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
