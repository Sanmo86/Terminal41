import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import sharp from 'sharp';
import { SITE, regionColor } from '../../../config/site';
import { escapeXml, wrapText } from '../../../lib/svgText';

// Build-time Pinterest pin image generator — one vertical 1000×1500 PNG
// per article, sized to Pinterest's recommended 2:3 ratio (their feed
// crops/penalizes other ratios). Deliberately a separate, more colorful
// template from the OG card generator next door: OG cards are read small
// in a link-preview strip, pins are read small in a scrolling grid and
// need to stop a thumb mid-scroll, so this leans on a bold region-colored
// gradient, a large hook headline, and a high-contrast CTA footer instead
// of OG's understated dark card. Same build-time raster-via-sharp
// approach as the OG generator, for the same crawler-compatibility
// reasons (Pinterest doesn't reliably rasterize SVG pin images either).
export async function getStaticPaths() {
  const entries = await getCollection('airports', ({ data }) => !data.draft);
  return entries.map((entry) => ({
    params: { lang: entry.data.lang, slug: entry.data.articleSlug },
    props: { entry },
  }));
}

const CTA = {
  en: { label: 'FULL GUIDE AT', domain: 'terminal41.co' },
  es: { label: 'GUÍA COMPLETA EN', domain: 'terminal41.co' },
} as const;

interface Props {
  entry: CollectionEntry<'airports'>;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const { data } = props.entry;
  const accent = regionColor(data.region);
  const cta = CTA[data.lang];
  const hookSource = data.spotlight?.title ?? data.title;
  // 24 chars × 6 lines comfortably covers even the longest spotlight
  // title in the collection (89 chars, ES) without truncating — checked
  // against the full content set rather than guessed.
  const hookLines = wrapText(hookSource, 24, 6);
  const locationLine = `${data.city}, ${data.country}`;

  const W = 1000;
  const H = 1500;
  const footerH = 220;

  // Vertically center the hook block in the band below the divider
  // rather than pinning it to a fixed y — a 1-line hook and a 6-line
  // hook both land in the same visual sweet spot instead of the short
  // ones leaving a wall of empty gradient underneath.
  const hookLineHeight = 74;
  const bandTop = 500;
  const bandBottom = H - footerH - 40;
  const blockHeight = hookLines.length * hookLineHeight;
  const hookStartY = bandTop + Math.max(0, (bandBottom - bandTop - blockHeight) / 2) + hookLineHeight * 0.7;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g opacity="0.13" fill="#ffffff">
    <path d="M-60 260 L${W + 60} 180 L${W + 60} 260 L-60 340 Z"/>
    <path d="M${W / 2 - 30} -40 L${W / 2 + 30} -40 L${W / 2 + 55} 460 L${W / 2 - 55} 460 Z"/>
  </g>

  <g font-family="Arial, Helvetica, sans-serif">
    <text x="60" y="90" font-size="34" font-weight="800" fill="#ffffff">✈ ${escapeXml(SITE.name)}</text>

    <text x="${W / 2}" y="320" font-size="230" font-weight="800" fill="#ffffff" text-anchor="middle">${escapeXml(data.iataCode)}</text>
    <text x="${W / 2}" y="380" font-size="42" font-weight="600" fill="#e2e8f0" text-anchor="middle">${escapeXml(locationLine)}</text>

    <rect x="60" y="440" width="${W - 120}" height="4" fill="#ffffff" opacity="0.25"/>

    ${hookLines
      .map(
        (line, i) =>
          `<text x="${W / 2}" y="${hookStartY + i * hookLineHeight}" font-size="56" font-weight="800" fill="#ffffff" text-anchor="middle">${escapeXml(line)}</text>`
      )
      .join('\n    ')}
  </g>

  <rect x="0" y="${H - footerH}" width="${W}" height="${footerH}" fill="#ffffff"/>
  <g font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
    <text x="${W / 2}" y="${H - footerH + 90}" font-size="28" font-weight="700" fill="#64748b" letter-spacing="2">${escapeXml(cta.label)}</text>
    <text x="${W / 2}" y="${H - footerH + 150}" font-size="52" font-weight="800" fill="#0f172a">${escapeXml(cta.domain)}</text>
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
