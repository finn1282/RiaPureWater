const MAX = 160;

/** Trims copy to a search-snippet length, ending on a full sentence or word. */
export function metaDescription(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= MAX) return clean;
  const sentenceEnd = clean.slice(0, MAX).lastIndexOf('. ');
  if (sentenceEnd > 80) return clean.slice(0, sentenceEnd + 1);
  const cut = clean.slice(0, MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
