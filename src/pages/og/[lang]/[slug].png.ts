import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import sharp from 'sharp';
import { SITE, regionColor } from '../../../config/site';
import { escapeXml, wrapText } from '../../../lib/svgText';

// Build-time dynamic Open Graph image generator — one real PNG per
// article (not the plain cover.svg), used for og:image/twitter:image and
// the Pinterest share link so shared/pinned links get an actual polished
// card instead of the flat illustration. Generated once per build (not
// per-request — this is a static site), by rendering an SVG template to
// a raster PNG with sharp. SVG was deliberately avoided as the final
// format: most link-preview crawlers (X/Twitter, WhatsApp, Pinterest)
// don't reliably rasterize SVG og:image values.
export async function getStaticPaths() {
  const entries = await getCollection('airports', ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { lang: entry.data.lang, slug: entry.data.articleSlug },
    props: { entry },
  }));
}

interface Props {
  entry: CollectionEntry<'airports'>;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const { data } = props.entry;
  const accent = regionColor(data.region);
  const hookSource = data.spotlight?.title ?? data.title;
  const hookLines = wrapText(hookSource, 34, 2);

  const W = 1200;
  const H = 630;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g opacity="0.14" fill="${accent}">
    <path d="M0 0 L${W} 0 L${W} 90 L0 260 Z"/>
    <path d="M${W - 260} ${H} L${W} ${H - 200} L${W} ${H} Z"/>
  </g>

  <g font-family="Arial, Helvetica, sans-serif" fill="#e2e8f0">
    <text x="72" y="76" font-size="30" font-weight="800" fill="#ffffff">✈ ${escapeXml(SITE.name)}</text>

    <text x="72" y="280" font-size="180" font-weight="800" fill="${accent}">${escapeXml(data.iataCode)}</text>

    <text x="72" y="360" font-size="52" font-weight="800" fill="#ffffff">${escapeXml(data.city)}, ${escapeXml(data.country)}</text>

    ${hookLines
      .map((line, i) => `<text x="72" y="${430 + i * 46}" font-size="34" font-weight="500" fill="#93c5fd">${escapeXml(line)}</text>`)
      .join('\n    ')}

    <text x="72" y="${H - 56}" font-size="26" font-weight="700" fill="#64748b">TERMINAL41.CO</text>
  </g>
</svg>`.trim();

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
