import type { CollectionEntry } from 'astro:content';
import { CATEGORIES, FILTER_GROUPS, type FilterKey } from './taxonomy';

export type FilterOption = { value: string; label: string };
export type FilterGroup = { key: FilterKey | 'category'; label: string; options: FilterOption[] };

// A group with a single option can't narrow anything, so it is left out.
const MIN_OPTIONS = 2;

/**
 * Builds the filter groups for a set of products. Only options that at least one
 * product carries are offered, in the order taxonomy.md lists them.
 */
export function buildFilterGroups(
  products: CollectionEntry<'products'>[],
  { includeCategory = false }: { includeCategory?: boolean } = {},
): FilterGroup[] {
  const groups: FilterGroup[] = [];

  if (includeCategory) {
    const present = new Set(products.map((p) => p.data.category));
    groups.push({
      key: 'category',
      label: 'Category',
      options: CATEGORIES.filter((c) => present.has(c.id)).map((c) => ({ value: c.id, label: c.name })),
    });
  }

  for (const group of FILTER_GROUPS) {
    const present = new Set<string>();
    for (const p of products) {
      const v = p.data[group.key];
      if (Array.isArray(v)) v.forEach((x) => present.add(x));
      else if (v) present.add(v);
    }
    groups.push({
      key: group.key,
      label: group.label,
      options: group.options.filter((o) => present.has(o)).map((o) => ({ value: o, label: o })),
    });
  }

  return groups.filter((g) => g.options.length >= MIN_OPTIONS);
}

/** Values a product carries per group, as read by the client script. */
export function productFilterValues(product: CollectionEntry<'products'>) {
  const d = product.data;
  return {
    category: [d.category],
    water_type: d.water_type ? [d.water_type] : [],
    install_type: d.install_type ? [d.install_type] : [],
    best_for: d.best_for,
    water_source: d.water_source ? [d.water_source] : [],
  };
}
