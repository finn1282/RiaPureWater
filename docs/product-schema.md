# RIA Pure Water — Product Data Schema
 
Locked schema for every product row in `products.json`. Every later phase (taxonomy, sitemap, mockups, Wix CMS build) references this file. If a new phase needs a field that isn't listed here, add it under "How to extend" at the bottom — don't invent fields inline.
 
**Related files**
- `products.json` — the product data itself, using this schema
- `product-copy.md` — customer-facing copy (bios, selling points, "best for" tags) written on top of this data
- `image-refs.md` — a flat list derived from every row's `image_refs` for manual photo extraction
---
 
## Top-level shape
 
Each product is one JSON object. `products.json` is an array of these objects.
 
```json
{
  "id": "kebab-case-slug",
  "name": "",
  "model": "",
  "category_candidate": "",
  "specs": {
    "dimensions": "",
    "capacity": "",
    "features": [],
    "power": "",
    "other": {}
  },
  "price_myr": null,
  "image_refs": [
    { "pdf": "1-40", "page": 12, "position": "hero (top half)" }
  ],
  "raw_notes": ""
}
```
 
---
 
## Field definitions
 
### `id` — required, string, kebab-case
The slug used in URLs, filenames, and CMS references. Rules:
- Lowercase.
- Hyphens replace spaces, dots, slashes, and parentheses.
- Based on the model number, not the descriptive name.
- Must be unique across the whole catalogue.
- Examples: `jx-1s`, `nb-32f-bl`, `cr-159-5000`, `w500-hc`, `ys-bt-10l-a5`.
- If two products share a model number across brands, disambiguate with a short suffix: `bv107-taiwan`, `bv107-korea`.
**Project convention:** `id` and `slug` refer to the same value. Earlier docs (`sitemap.md`, `page-specs.md`) use `{slug}` in URL patterns — those patterns are filled from this `id` field. Going forward, `id` is the canonical name. In Wix CMS, name the field `id` and let Wix's dynamic-page URL builder read from it.
 
### `name` — required, string
Short human-readable name of the product. Not the same as `model`. This is what appears as the product page's H1 and card title.
- Follow the sentence style used in the catalogue's page title (e.g. "Smart Touch Display Faucet — Instant Hot & Cold").
- Use an em dash (`—`) to separate the product family from its distinguishing feature.
- Skip marketing fluff. "Just Tap Instant-Heating Pipeline Water Dispenser" from the catalogue becomes "Instant-Heating Pipeline Water Dispenser". Selling points go in Checkpoint 4 copy, not the name.
- Keep under ~60 characters when possible.
### `model` — required, string
The manufacturer's model number, exactly as printed on the "Model:" bar. Preserve case, spaces, hyphens, and parenthesised suffixes.
- Examples: `JX-1S`, `K-2200`, `MAO-16 (AE)`, `YS-30BK (20L)`.
- If the page bundles multiple SKUs and each has its own model number, split into separate product rows (see "Multi-SKU pages" below).
### `category_candidate` — required, string
Best-guess category for Phase 2 taxonomy. Not final — Phase 2 may rename or merge these. Use one of the working categories:
- `Water Dispensers — Tabletop`
- `Water Dispensers — Floor Standing`
- `Water Dispensers — Bottle Type`
- `Water Dispensers — Portable / Multi-function`
- `Smart Faucets (Undersink)`
- `Instant Heating Purifiers (Tankless)`
- `Alkaline / Energy Water Systems`
- `Commercial Water Boilers`
- `Commercial Water Coolers`
- `Master Water Filters` (whole-house FRP + SS)
- `Outdoor Filtration — Stainless Steel UF`
- `Filter Cartridges`
- `Filter Housings`
- `Faucets & Pressure Tanks`
- `Fittings`
- `Water Timers & Float Valves`
- `Other Commercial Appliances`
If nothing fits, use your best short label and flag in `raw_notes`.
 
### `specs.dimensions` — string, may be empty
Physical dimensions as a single string. Use the catalogue's format.
- Preferred pattern: `W<num>mm x D<num>mm x H<num>mm`.
- If the catalogue gives a diameter × length (common for UF cylinders): `ø<num>mm x <num>mm (ø<inches>" x <inches>")`.
- If the value is packing-box size not unit size, say so: `W435mm x D160mm x H420mm (packing box)`.
- Empty string `""` if not printed on the page.
### `specs.capacity` — string, may be empty
Short human summary of tank / flow capacity.
- Dispensers: `Hot X, Cold Y` or `Hot X, Normal Y, Cold Z`.
- Boilers: `Hot 18L (100°C), Warm 18L (45°C)`.
- Under-sink / instant heat units: `Hot 25L/H, Cold 1.2L/H`.
- UF / master filters: `Flow rate 2500 L/hr`.
- Full breakdown by tank goes in `specs.other.water_temperature` and any per-tank litre numbers can also live in `specs.other`.
- Empty string `""` if the product has no meaningful capacity (e.g. a fitting).
### `specs.features` — array of strings
Factual bullets. Terse. One statement per bullet.
- Include: physical features, safety features, filtration stages summary, materials, certifications, installation type, tank technology.
- Exclude: marketing language, tone-shaped selling points, taglines. Those live in `product-copy.md`.
- Keep each bullet under ~15 words.
- If the page shows the same fact as an icon and as text, capture it once.
- Empty array `[]` if the page has no feature list.
### `specs.power` — string
Power consumption as printed.
- Preferred pattern for dispensers with hot + cold: `Hot 600W, Cold 120W`.
- Single-power products: `2000W`.
- Non-electric products: `"N/A (non-electric)"`.
- Voltage goes in `specs.other.rated_voltage`, not here.
- Empty string `""` if the page doesn't state power.
### `specs.other` — object, may be empty `{}`
Catch-all for anything that doesn't fit the fixed fields. Use these keys where they apply — consistent keys make Phase 2 taxonomy and Wix CMS mapping easier.
 
Recognised keys (add new ones freely, but reuse these when they fit):
- `water_temperature` — object with any of `hot`, `normal`, `cold`, each a string range. Example: `{ "hot": "45–95°C", "cold": "6.5–10°C" }`.
- `rated_voltage` — string, e.g. `"220–240V / 50Hz"`.
- `net_weight` — string, e.g. `"30kg"`.
- `filter_stages` — array of strings, each stage on its own line. Example: `["Step 1: 10\" PP + CTO Filter", "Step 2: 10\" UF Membrane"]`.
- `colours` — array of strings, e.g. `["White", "Black", "Matt Black Gold"]`.
- `country_of_origin` — string, e.g. `"Korea"`, `"Malaysia"`, `"Taiwan"`. Omit if not stated.
- `installation` — string, describing how the unit installs. Example: `"Pipe-in, compressor cooling, 4-way filtration"`.
- `cooling_method` — string, e.g. `"Compressor cooling"`, `"Electronic cooling"`, `"Instant heating tankless"`.
- `loading` — string for bottle-type dispensers: `"Top loading"` or `"Bottom loading"`.
- `tap_drilling_hole` — string, e.g. `"23–28mm"` (for undersink smart faucets).
- `connector` — string, e.g. `"3/4\" (6分)"` (for outdoor UF / master filter systems).
- `filter_type` — string used when a single membrane type replaces the multi-step `filter_stages` list. Example: `"Hollow Fibre Membrane"`, `"PVDF-S Ultrafiltration Membrane"`.
- `feed_water_pressure` / `operating_pressure` — string, e.g. `"0.1–0.35 MPa"`.
- `flow_rate` — string, use only when `capacity` isn't already a flow rate.
- `upgrade_options` — array of strings, for products that list "Upgrade 1 / 2 / 3" boxes on the catalogue page.
- `variants` — array of strings for multi-SKU-on-one-page products where variants stay as one row. Example (for a master filter family kept as one row): `["935 Grey", "942 Grey", "1044 Grey"]`. Prefer splitting into separate products when specs differ meaningfully.
### `price_myr` — always `null` for this build
Kept in the schema for future use. RIA Pure Water is contact-for-price, so every row's `price_myr` is `null`. Do not fill this.
 
### `image_refs` — array, at least one entry
Tells Zhen which page and where on the page to grab the product photo from.
- Each entry is `{ "pdf": "1-40" | "41-79", "page": <int>, "position": "<string>" }`.
- `pdf`: `"1-40"` for `Product_Catalogue-1-40.pdf`, `"41-79"` for `Product_Catalogue-41-79.pdf`.
- `page`: the JPEG file number inside the zip (1–40 for the first PDF, 1–39 for the second). Not the printed catalogue page number.
- `position`: a rough locator, one short phrase. Enough for Zhen to find the crop, not pixel-precise. Examples: `"hero (top half)"`, `"hero (right half)"`, `"hero (centre, both colours shown)"`, `"top-left of variant grid"`, `"3rd row, middle column"`.
- Multiple entries when the same product has more than one useful image on the same page or spans multiple pages.
- If the product has no usable image in the catalogue, use one entry with `"position": "no usable image — needs new photo"` and flag in `raw_notes`.
### `raw_notes` — string, may be empty
Anything ambiguous, uncertain, or worth checking. Never guess into a spec field — flag it here instead.
- Use for: unclear specs, alternative filter loadouts, near-duplicate pages, companion products, missing English text, values that look inconsistent with other pages.
- Empty string `""` when the row extracted cleanly.
- Do not use for badges (OPEN / NEW / COMING SOON) — those are ignored per project decision.
---
 
## Multi-SKU pages
 
When one catalogue page shows several distinct products (different model numbers, different specs), split into separate rows in `products.json`.
 
- Cat1 p36: W500 family — 5 separate rows (`w500-hc`, `w500-2c`, `w500-normal`, `w500-4p-hc`, `w500-4p-cold`).
- Cat1 p38: `k600-hc` and `k600-2c` — 2 rows.
- Cat1 p29: `an-d12` and `an-d13` — 2 rows.
- Cat2 p13: `mp-01` and `mp-02` — 2 rows.
- Cat2 p17: `cr-159-5000` and `cr-159-8000` — 2 rows.
When a single product has finish or colour variants that share every spec, keep it as one row and use `specs.other.colours`.
 
- SB-01 Black + White → one row, `colours: ["Black", "White"]`.
- OHC-500U White Silver + Black Gold → one row, `colours: ["White Silver", "Black Gold"]`.
For accessory pages using Option C grouping (fittings, valves, housings), each catalogue page's grouped entry gets its own row with a descriptive name and the SKU list in `specs.features` or `specs.other.variants`.
 
---
 
## Badges
 
Ignore `OPEN Item`, `2026 NEW PRODUCT`, `COMING SOON`, `CONTROL Item`. Every product is treated as available inventory. Do not record these in any field.
 
---
 
## How to extend
 
If a later phase needs a field that isn't listed:
1. Add it under a recognised `specs.other` key if it's product-specific.
2. If it becomes common (appears on 20%+ of products), promote it to a top-level `specs` key by editing this file and re-running the affected extraction.
3. Never invent field names inline without updating this doc — future chats will read this file to understand the format.
When adding a new `specs.other` key, follow the naming style: lowercase, underscores between words, string or array of strings for the value. Objects (like `water_temperature`) only when the value is inherently structured.