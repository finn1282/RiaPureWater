// Build-time readers for the planning docs that feed the collections.
// They throw on anything unexpected so a bad edit fails the build instead of shipping.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  CATEGORIES,
  FILTER_ALIASES,
  FILTER_GROUPS,
  type CategoryId,
  type FilterKey,
} from './taxonomy';

const root = process.cwd();
const docs = (file: string) => readFileSync(join(root, 'docs', file), 'utf8');

export function readProductsJson(): unknown[] {
  return JSON.parse(docs('products.json'));
}

// ---- product-copy.md -------------------------------------------------------

export type ProductCopy = { heading: string; intro: string; ksps: string[] };

// Copy sections follow products.json row-for-row. Matching by position,
// then checking each heading contains the model number, catches drift.
export function readProductCopy(): ProductCopy[] {
  const blocks = docs('product-copy.md')
    .split(/\n---\s*\n/)
    .map((b) => b.trim())
    .filter((b) => b.startsWith('## '));

  return blocks.map((block) => {
    const lines = block.split('\n');
    const heading = lines[0].replace(/^##\s+/, '').trim();
    const whyAt = lines.findIndex((l) => l.startsWith('**Why choose it:**'));
    if (whyAt === -1) throw new Error(`product-copy.md: no "Why choose it" list under "${heading}"`);
    const intro = lines
      .slice(1, whyAt)
      .filter((l) => l.trim() && !l.startsWith('**Best for:**'))
      .join(' ')
      .trim();
    const ksps = lines
      .slice(whyAt + 1)
      .filter((l) => l.startsWith('- '))
      .map((l) => l.slice(2).trim());
    return { heading, intro, ksps };
  });
}

const squash = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export function copyMatches(copy: ProductCopy, product: { name: string; model: string }) {
  const h = squash(copy.heading);
  return h.includes(squash(product.model)) || h.includes(squash(product.name));
}

// ---- taxonomy.md -----------------------------------------------------------

export type TaxonomyRow = {
  category: CategoryId;
  water_type: string | null;
  install_type: string | null;
  best_for: string[];
  water_source: string | null;
};

const categoryByName = new Map<string, CategoryId>(CATEGORIES.map((c) => [c.name, c.id]));

function canonical(key: FilterKey, raw: string, id: string): string {
  const value = FILTER_ALIASES[key][raw] ?? raw;
  const group = FILTER_GROUPS.find((g) => g.key === key)!;
  if (!(group.options as readonly string[]).includes(value)) {
    throw new Error(`taxonomy.md: "${raw}" is not a ${group.label} option (product ${id})`);
  }
  return value;
}

const strip = (cell: string) => cell.replace(/\*/g, '').trim();

let taxonomyCache: Map<string, TaxonomyRow> | undefined;

export function readTaxonomyMapping(): Map<string, TaxonomyRow> {
  if (taxonomyCache) return taxonomyCache;
  const rows = new Map<string, TaxonomyRow>();
  let category: CategoryId | undefined;

  for (const line of docs('taxonomy.md').split('\n')) {
    const heading = line.match(/^### (.+?) \(\d+\)\s*$/);
    if (heading) {
      category = categoryByName.get(heading[1]);
      continue;
    }
    if (!category || !line.startsWith('|')) continue;

    const cells = line.split('|').slice(1, -1).map(strip);
    const id = cells[0];
    if (!id || id === 'ID' || /^-+$/.test(id)) continue;
    if (rows.has(id)) throw new Error(`taxonomy.md: duplicate product ${id}`);

    const [, wt, it, bf, ws] = cells;
    const none = (v?: string) => !v || v.toUpperCase() === 'N/A';
    rows.set(id, {
      category,
      water_type: none(wt) ? null : canonical('water_type', wt, id),
      install_type: none(it) ? null : canonical('install_type', it, id),
      best_for: none(bf) ? [] : bf.split(',').map((v) => canonical('best_for', v.trim(), id)),
      water_source: none(ws) ? null : canonical('water_source', ws, id),
    });
  }
  return (taxonomyCache = rows);
}

// ---- images ----------------------------------------------------------------

// Photos land in public/images/products/{id}/ (Phase 4.5). Missing folder = no photos yet.
export function listProductImages(id: string): string[] {
  const dir = join(root, 'public', 'images', 'products', id);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/images/products/${id}/${f}`);
}
