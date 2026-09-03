// Small shared helpers for building text-heavy SVG templates that get
// rasterized to PNG at build time (OG cards, Pinterest pins). Extracted
// here so the two generators don't duplicate the same escaping/wrapping
// logic — add a new build-time image generator, import from here.

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Greedy word-wrap by character count — good enough for a headline-style
// line at a fixed font size, no need for real text-metrics here. Wraps
// the full string first, then truncates with an ellipsis only if that
// genuinely produces more lines than allowed (rather than bailing out
// mid-wrap, which would leave a stray leftover word as the last line).
export function wrapText(text: string, maxCharsPerLine: number, maxLines: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\s*\S*$/, '') + '…';
    return kept;
  }
  return lines;
}
