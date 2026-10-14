// Single source for categories and filter options. Mirrors docs/taxonomy.md;
// the product-to-filter mapping itself is parsed from that file at build time.

export const CATEGORIES = [
  {
    id: 'home-water-dispensers',
    name: 'Home Water Dispensers',
    icon: 'glass-water',
    description:
      'Countertop, floor-standing, bottle-type, and portable dispensers for home and office use.',
    contact_prompt_noun: 'dispenser',
    show_filters: true,
  },
  {
    id: 'undersink-smart-faucets',
    name: 'Undersink & Smart Faucets',
    icon: 'droplets',
    description:
      'Under-sink filter systems, smart touch faucets, alkaline systems, tankless purifiers.',
    contact_prompt_noun: 'system',
    show_filters: true,
  },
  {
    id: 'commercial-equipment',
    name: 'Commercial Equipment',
    icon: 'building-2',
    description: 'Water boilers, water coolers, and other commercial appliances.',
    contact_prompt_noun: 'unit',
    show_filters: true,
  },
  {
    id: 'whole-house-filtration',
    name: 'Whole-House Filtration',
    icon: 'shield-check',
    description: 'Master water filters (FRP and stainless steel) and outdoor UF systems.',
    contact_prompt_noun: 'system',
    show_filters: true,
  },
  {
    id: 'filters-cartridges',
    name: 'Filters & Cartridges',
    icon: 'filter',
    description: 'Replacement ceramic cartridges and filter housings.',
    contact_prompt_noun: 'cartridge',
    show_filters: false,
  },
  {
    id: 'parts-fittings',
    name: 'Parts & Fittings',
    icon: 'wrench',
    description: 'Fittings, faucets, pressure tanks, valves, and timers.',
    contact_prompt_noun: 'part',
    show_filters: false,
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as [CategoryId, ...CategoryId[]];

export const WATER_TYPES = [
  'Hot & Cold',
  'Hot, Normal & Cold',
  'Hot & Normal',
  'Hot Only',
  'Multi-Temperature Smart Faucet',
  'Purified / Ambient Only',
  'Whole-House / Filtration System',
] as const;

export const INSTALL_TYPES = [
  'Countertop / Tabletop',
  'Floor-Standing',
  'Undersink',
  'Bottle-Type',
  'Whole-House / Outdoor',
] as const;

export const BEST_FOR = ['Household', 'Office', 'Commercial'] as const;

export const WATER_SOURCES = ['Pipe-In', 'Bottle-Loading', 'Portable (manual fill)'] as const;

export const FILTER_GROUPS = [
  { key: 'water_type', label: 'Water Type', options: WATER_TYPES, multi_value: false },
  { key: 'install_type', label: 'Install Type', options: INSTALL_TYPES, multi_value: false },
  { key: 'best_for', label: 'Best For', options: BEST_FOR, multi_value: true },
  { key: 'water_source', label: 'Water Source', options: WATER_SOURCES, multi_value: false },
] as const;

export type FilterKey = (typeof FILTER_GROUPS)[number]['key'];

// taxonomy.md tables use shorter labels than its filter lists; map them to the canonical option.
export const FILTER_ALIASES: Record<FilterKey, Record<string, string>> = {
  water_type: {},
  install_type: { Countertop: 'Countertop / Tabletop' },
  best_for: {},
  water_source: { Portable: 'Portable (manual fill)' },
};

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}
