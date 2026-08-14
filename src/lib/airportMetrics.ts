// Shared parsing helpers + rankings config, used by:
// - src/pages/rankings/[ranking].astro (+ the es/ variant)
// - src/pages/directory-index.json.ts (+ the es/ variant), for facet buckets
//
// All parsing is intentionally conservative: every frontmatter field here
// (quickFacts.distanceToCity, quickFacts.passengers, security.typeATypical,
// transportOptions[].label) is free-text written by hand across 57+
// articles, not a strict enum. If a string doesn't match the expected
// pattern, the parser returns null and that airport is simply excluded from
// the ranking/facet rather than guessed at — wrong "closest airport" or
// "fastest security" claims are worse than an airport quietly missing from
// one list.

export function parseDistanceKm(distanceToCity?: string): number | null {
  if (!distanceToCity) return null;
  const m = distanceToCity.match(/^(\d+(?:\.\d+)?)\s*km/i);
  return m ? parseFloat(m[1]) : null;
}

export function parsePassengersMillions(passengers?: string): number | null {
  if (!passengers) return null;
  const m = passengers.match(/^(\d+(?:\.\d+)?)\s*M/i);
  return m ? parseFloat(m[1]) : null;
}

// Parses "10–15 min" / "10-15 min" / "90 minutes" -> the lower/optimistic
// bound, in minutes. Used to rank "fastest security" and to bucket the
// directory filter. Handles both the en-dash and hyphen range separator, and
// the one-off "90 minutes" / "2 hours" arrival-guidance style strings.
export function parseMinutesLowerBound(range?: string): number | null {
  if (!range) return null;
  const rangeMatch = range.match(/(\d+)\s*[–-]\s*\d+\s*min/i);
  if (rangeMatch) return parseInt(rangeMatch[1], 10);
  const singleMatch = range.match(/^(\d+)\s*min/i);
  if (singleMatch) return parseInt(singleMatch[1], 10);
  return null;
}

const BUS_HINT = /bus/i;
const RAIL_KEYWORDS =
  /\b(train|rail|metro|subway|tram|s-bahn|skytrain|airtrain|maglev|monorail|gautrain|dart|marta|mrt|bart|rer|cta|rtd|arex|sprinter|elizabeth line|piccadilly|keikyu)\b/i;

// Conservative heuristic: an airport only counts as having a direct rail
// link if at least one transport option's label matches a recognized rail
// keyword AND does not also mention "bus" (several bus-rapid-transit brands
// are confusingly named — "Metrobus", "Aerobús", "SkyDrive Bus" all contain
// rail-sounding words but are buses). Defaults to false when ambiguous
// rather than risk a false "yes, there's a train" claim.
export function findRailOption<T extends { label: string }>(transportOptions?: T[]): T | null {
  if (!transportOptions) return null;
  return transportOptions.find((o) => RAIL_KEYWORDS.test(o.label) && !BUS_HINT.test(o.label)) ?? null;
}

export function hasRailTransit(transportOptions?: { label: string }[]): boolean {
  return findRailOption(transportOptions) !== null;
}

// --- Distance buckets, shared by the /directory facet filter -----------
export type DistanceBucket = 'close' | 'mid' | 'far';

export function distanceBucket(km: number | null): DistanceBucket | null {
  if (km === null) return null;
  if (km < 15) return 'close';
  if (km <= 30) return 'mid';
  return 'far';
}

// --- Security-speed buckets, shared by the /directory facet filter -----
export type SecurityBucket = 'fast' | 'moderate' | 'slower';

export function securityBucket(minutes: number | null): SecurityBucket | null {
  if (minutes === null) return null;
  if (minutes < 20) return 'fast';
  if (minutes <= 35) return 'moderate';
  return 'slower';
}

// --- Rankings config -----------------------------------------------------
// Each ranking is computed at build time straight from the airports
// collection — no separate content type, no risk of the list drifting out
// of sync with the articles themselves.

interface QuickFactsLike {
  passengers?: string;
  distanceToCity?: string;
}
interface SecurityLike {
  typeALabel?: string;
  typeATypical?: string;
}
interface TransportOptionLike {
  label: string;
  time?: string;
}
export interface RankableAirportData {
  quickFacts?: QuickFactsLike;
  security?: SecurityLike;
  transportOptions?: TransportOptionLike[];
}

export interface RankingMetric {
  value: number; // comparable — lower or higher is "better" per sortDirection
  display: string; // human-readable value shown next to the airport
}

export interface RankingDef {
  slug: string;
  icon: string;
  label: { en: string; es: string };
  description: { en: string; es: string };
  metricLabel: { en: string; es: string };
  sortDirection: 'asc' | 'desc';
  getMetric: (data: RankableAirportData) => RankingMetric | null;
}

export const RANKINGS: RankingDef[] = [
  {
    slug: 'closest-to-downtown',
    icon: '📍',
    label: { en: 'Closest to Downtown', es: 'Más cercanos al centro' },
    description: {
      en: 'Airports with the shortest distance from the terminal to the city center — least time lost to the transfer.',
      es: 'Aeropuertos con la distancia más corta desde la terminal hasta el centro de la ciudad — el menor tiempo perdido en el trayecto.',
    },
    metricLabel: { en: 'Distance to downtown', es: 'Distancia al centro' },
    sortDirection: 'asc',
    getMetric: (data) => {
      const km = parseDistanceKm(data.quickFacts?.distanceToCity);
      if (km === null || !data.quickFacts?.distanceToCity) return null;
      return { value: km, display: data.quickFacts.distanceToCity };
    },
  },
  {
    slug: 'fastest-security',
    icon: '⚡',
    label: { en: 'Fastest Through Security', es: 'Seguridad más rápida' },
    description: {
      en: "Ranked by each airport's typical security wait time on its easiest flight type (domestic, regional, or Schengen).",
      es: 'Clasificados por el tiempo de espera típico en seguridad de cada aeropuerto, en su tipo de vuelo más sencillo (nacional, regional o Schengen).',
    },
    metricLabel: { en: 'Typical security wait', es: 'Espera típica en seguridad' },
    sortDirection: 'asc',
    getMetric: (data) => {
      const min = parseMinutesLowerBound(data.security?.typeATypical);
      if (min === null || !data.security?.typeATypical) return null;
      return { value: min, display: `${data.security.typeATypical}${data.security.typeALabel ? ` (${data.security.typeALabel})` : ''}` };
    },
  },
  {
    slug: 'biggest-airports',
    icon: '🏆',
    label: { en: "The World's Biggest Airports", es: 'Los aeropuertos más grandes del mundo' },
    description: {
      en: 'Ranked by yearly passenger traffic, from busiest to quietest among the airports covered here.',
      es: 'Clasificados por tráfico anual de pasajeros, de los más transitados a los menos, entre los aeropuertos cubiertos aquí.',
    },
    metricLabel: { en: 'Passengers per year', es: 'Pasajeros al año' },
    sortDirection: 'desc',
    getMetric: (data) => {
      const m = parsePassengersMillions(data.quickFacts?.passengers);
      if (m === null || !data.quickFacts?.passengers) return null;
      return { value: m, display: data.quickFacts.passengers };
    },
  },
  {
    slug: 'direct-train-to-city',
    icon: '🚆',
    label: { en: 'Direct Train Into the City', es: 'Tren directo a la ciudad' },
    description: {
      en: 'Airports that connect to the city center by train, metro, or a dedicated rail link — no traffic, no surprises.',
      es: 'Aeropuertos conectados al centro de la ciudad en tren, metro o un enlace ferroviario dedicado — sin tráfico, sin sorpresas.',
    },
    metricLabel: { en: 'Rail option', es: 'Opción de tren' },
    sortDirection: 'asc',
    getMetric: (data) => {
      const rail = findRailOption(data.transportOptions);
      if (!rail) return null;
      return { value: 0, display: rail.time ? `${rail.label} — ${rail.time}` : rail.label };
    },
  },
];
