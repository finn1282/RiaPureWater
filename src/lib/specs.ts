// Turns the loose specs object from products.json into labelled rows for the spec table.

export type SpecRow = { label: string; values: string[] };

type Specs = {
  dimensions: string;
  capacity: string;
  power: string;
  other: Record<string, unknown>;
};

// Supplier reference numbers; useful to staff, noise to customers.
const HIDDEN_KEYS = new Set(['internal_id', 'internal_ids', 'filter_cartridge_id']);

// Shown first, in this order; remaining keys follow in the order they appear in the data.
const KEY_ORDER = [
  'water_temperature',
  'rated_voltage',
  'net_weight',
  'country_of_origin',
  'colours',
  'colour_options',
  'installation',
  'cooling_method',
  'loading',
  'filter_stages',
  'filter_type',
];

const humanise = (key: string) => {
  const text = key.replace(/_/g, ' ');
  return text.charAt(0).toUpperCase() + text.slice(1);
};

function toValues(value: unknown): string[] {
  if (value == null || value === '') return [];
  if (typeof value === 'boolean') return [value ? 'Yes' : 'No'];
  if (typeof value === 'string' || typeof value === 'number') return [String(value)];
  if (Array.isArray(value)) return value.flatMap(toValues);
  if (typeof value === 'object') {
    // e.g. water_temperature: { hot: "45–95°C", cold: "6.5–10°C" }
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
      toValues(v).map((text) => `${humanise(k)}: ${text}`),
    );
  }
  return [];
}

export function buildSpecRows(specs: Specs): SpecRow[] {
  const rows: SpecRow[] = [
    { label: 'Dimensions', values: toValues(specs.dimensions) },
    { label: 'Capacity', values: toValues(specs.capacity) },
    { label: 'Power', values: toValues(specs.power) },
  ];

  const keys = Object.keys(specs.other).filter((k) => !HIDDEN_KEYS.has(k));
  const ordered = [
    ...KEY_ORDER.filter((k) => keys.includes(k)),
    ...keys.filter((k) => !KEY_ORDER.includes(k)),
  ];
  for (const key of ordered) rows.push({ label: humanise(key), values: toValues(specs.other[key]) });

  return rows.filter((r) => r.values.length > 0);
}
