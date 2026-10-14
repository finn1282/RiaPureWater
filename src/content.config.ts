import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import {
  BEST_FOR,
  CATEGORIES,
  CATEGORY_IDS,
  INSTALL_TYPES,
  WATER_SOURCES,
  WATER_TYPES,
} from './lib/taxonomy';
import {
  copyMatches,
  listProductImages,
  readProductCopy,
  readProductsJson,
  readTaxonomyMapping,
} from './lib/content-sources';

const specsSchema = z.object({
  dimensions: z.string(),
  capacity: z.string(),
  features: z.array(z.string()),
  power: z.string(),
  // Free-form on purpose: keys vary by product (see product-schema.md)
  other: z.record(z.string(), z.unknown()),
});

const productSchema = z.object({
  name: z.string().min(1),
  model: z.string().min(1),
  category: z.enum(CATEGORY_IDS),
  intro: z.string().min(1),
  ksps: z.array(z.string().min(1)).min(1),
  specs: specsSchema,
  // Filters; null / empty means "does not apply" and the chip is skipped
  water_type: z.enum(WATER_TYPES).nullable(),
  install_type: z.enum(INSTALL_TYPES).nullable(),
  best_for: z.array(z.enum(BEST_FOR)),
  water_source: z.enum(WATER_SOURCES).nullable(),
  // Catalogue is contact-for-price: anything but null fails the build
  price_myr: z.null(),
  raw_notes: z.string(),
  // Curated notes replace raw_notes in "Good to know" once Phase 6 fills them
  notes: z.string().default(''),
  featured: z.boolean().default(false),
  images: z.array(z.string()),
});

const products = defineCollection({
  loader: () => {
    const rows = readProductsJson() as Array<Record<string, any>>;
    const copy = readProductCopy();
    const taxonomy = readTaxonomyMapping();

    if (copy.length !== rows.length) {
      throw new Error(`product-copy.md has ${copy.length} sections, products.json has ${rows.length}`);
    }
    const ids = new Set(rows.map((r) => r.id));
    for (const id of taxonomy.keys()) {
      if (!ids.has(id)) throw new Error(`taxonomy.md lists "${id}", which is not in products.json`);
    }

    return rows.map((row, i) => {
      if (!copyMatches(copy[i], row as { name: string; model: string })) {
        throw new Error(
          `product-copy.md section ${i + 1} "${copy[i].heading}" does not match ${row.id} (${row.model})`,
        );
      }
      const tax = taxonomy.get(row.id);
      if (!tax) throw new Error(`taxonomy.md has no row for "${row.id}"`);

      return {
        id: row.id as string,
        name: row.name,
        model: row.model,
        category: tax.category,
        intro: copy[i].intro,
        ksps: copy[i].ksps,
        specs: row.specs,
        water_type: tax.water_type,
        install_type: tax.install_type,
        best_for: tax.best_for,
        water_source: tax.water_source,
        price_myr: row.price_myr,
        raw_notes: row.raw_notes,
        notes: row.notes,
        featured: row.featured,
        images: listProductImages(row.id),
      };
    });
  },
  schema: productSchema,
});

const categories = defineCollection({
  loader: () => {
    const counts = new Map<string, number>();
    for (const { category } of readTaxonomyMapping().values()) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
    return CATEGORIES.map((c, i) => ({ ...c, sort_order: i, product_count: counts.get(c.id) ?? 0 }));
  },
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    description: z.string(),
    contact_prompt_noun: z.string(),
    show_filters: z.boolean(),
    sort_order: z.number(),
    product_count: z.number(),
  }),
});

export const collections = { products, categories };
