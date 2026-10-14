# RIA Pure Water — Taxonomy
 
Final category tree, filter groups, and product mapping for the site. Used by Phase 3 (sitemap) to design category pages and by Phase 5 (Wix CMS) to structure reference fields.
 
**Related files**
- `products.json` — product data
- `product-copy.md` — customer-facing copy
- `product-schema.md` — data field definitions
---
 
## Category tree
 
Flat structure — 6 top-level categories, no sub-categories. Every product sits one click below the home page.
 
| # | Category | Products | Icon (Lucide) | Purpose |
|---|---|---|---|---|
| 1 | Home Water Dispensers | 21 | `glass-water` | Countertop, floor-standing, bottle-type, and portable dispensers for home and office use |
| 2 | Undersink & Smart Faucets | 19 | `droplets` | Under-sink filter systems, smart touch faucets, alkaline systems, tankless purifiers |
| 3 | Commercial Equipment | 18 | `building-2` | Water boilers, water coolers, other commercial appliances |
| 4 | Whole-House Filtration | 23 | `shield-check` | Master water filters (FRP + SS) and outdoor UF systems |
| 5 | Filters & Cartridges | 4 | `filter` | Replacement ceramic cartridges and filter housings |
| 6 | Parts & Fittings | 8 | `wrench` | Fittings, faucets, pressure tanks, valves, timers |
 
**Total: 93 products**
 
**Icons.** Lucide set (matches `brand-brief.md`). Rendered in `--brand-green` (`#1F6F3A`) on Home category tiles, About "What we sell" strip, and footer category list. Icon names are the Lucide identifiers — usable directly in Wix via the Lucide icon library or by loading matching SVGs. Populate the `icon` field on each row of the `Categories` collection with these values.
 
---
 
## Filter groups
 
Four filter groups sit on top of the category tree. Every filter option has ≥2 products. Filters are hidden on Filters & Cartridges and Parts & Fittings — those pages don't need Water Type or Best For chips.
 
### 1. Water Type
 
What the product dispenses.
 
- Hot & Cold
- Hot, Normal & Cold
- Hot & Normal
- Hot Only
- Multi-Temperature Smart Faucet
- Purified / Ambient Only
- Whole-House / Filtration System
### 2. Install Type
 
Where it goes.
 
- Countertop / Tabletop
- Floor-Standing
- Undersink
- Bottle-Type
- Whole-House / Outdoor
### 3. Best For
 
Who it's built for. A product may carry more than one tag.
 
- Household
- Office
- Commercial
### 4. Water Source
 
How it's fed.
 
- Pipe-In
- Bottle-Loading
- Portable (manual fill)
---
 
## Product → category + filters mapping
 
Legend: **WT** = Water Type · **IT** = Install Type · **BF** = Best For · **WS** = Water Source · *N/A* = filter does not apply to this product
 
### Home Water Dispensers (21)
 
| ID | WT | IT | BF | WS |
|---|---|---|---|---|
| qk-4zi | Hot & Cold | Countertop | Household, Office | Portable |
| lk-17 | Hot, Normal & Cold | Countertop | Household, Office | Portable |
| whp-2000s | Hot & Cold | Countertop | Household, Office | Pipe-In |
| k-1800s | Hot & Cold | Countertop | Household, Office | Pipe-In |
| k-850s | Hot & Cold | Countertop | Household, Office | Pipe-In |
| whp-2300 | Hot & Cold | Countertop | Household, Office | Pipe-In |
| fyk-335c | Hot, Normal & Cold | Countertop | Household, Office | Pipe-In |
| fyk-336c | Hot, Normal & Cold | Countertop | Household | Pipe-In |
| ohc-500u | Hot, Normal & Cold | Countertop | Household, Office | Pipe-In |
| an-d12 | Hot & Normal | Countertop | Household, Office | Pipe-In |
| an-d13 | Hot & Normal | Countertop | Household, Office | Pipe-In |
| an-d14 | Hot & Cold | Countertop | Household, Office | Pipe-In |
| w3501-3c | Hot, Normal & Cold | Countertop | Household, Office | Pipe-In |
| k-2200 | Hot & Cold | Floor-Standing | Household, Office, Commercial | Pipe-In |
| fyk-333f | Hot & Cold | Floor-Standing | Household, Office | Pipe-In |
| fyk-335f | Hot & Cold | Floor-Standing | Household, Office | Pipe-In |
| ohf-500u | Hot & Cold | Floor-Standing | Household, Office | Pipe-In |
| w3501-3f | Hot, Normal & Cold | Floor-Standing | Household, Office | Pipe-In |
| w3501-3f-big-tank | Hot, Normal & Cold | Floor-Standing | Commercial | Pipe-In |
| nb-32f-bt | Hot & Cold | Bottle-Type | Household, Office | Bottle-Loading |
| nb-32f-bl | Hot & Cold | Bottle-Type | Household, Office | Bottle-Loading |
 
### Undersink & Smart Faucets (19)
 
| ID | WT | IT | BF | WS |
|---|---|---|---|---|
| jx-1s | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| os-l002 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| nf-5100 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| jx-l006 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| nf-5300 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| jx-q2 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| nf-5200 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| nf-5800 | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| mao-16-ab | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| mao-16-ae | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| mao-12-ae | Multi-Temperature Smart Faucet | Undersink | Household | Pipe-In |
| st-2600h | Hot & Normal | Countertop | Household, Office | Pipe-In |
| pts-100w | Hot & Normal | Countertop | Household, Office | Pipe-In |
| ab-03 | Purified / Ambient Only | Undersink | Household | Pipe-In |
| sb-01 | Purified / Ambient Only | Undersink | Household | Pipe-In |
| xxy-4000 | Purified / Ambient Only | Undersink | Household | Pipe-In |
| ae-007 | Purified / Ambient Only | Countertop | Household | Pipe-In |
| mp-01 | Purified / Ambient Only | Undersink | Household | Pipe-In |
| mp-02 | Purified / Ambient Only | Undersink | Household | Pipe-In |
 
### Commercial Equipment (18)
 
| ID | WT | IT | BF | WS |
|---|---|---|---|---|
| sh-12bg-hn | Hot & Normal | Countertop | Commercial | Pipe-In |
| ys-bt-10l-a5 | Hot Only | Countertop | Commercial | Pipe-In |
| ys-bt-20l-a5 | Hot Only | Countertop | Commercial | Pipe-In |
| ys-30bk-20l | Hot Only | Countertop | Commercial | Pipe-In |
| ys-60bk-40l | Hot Only | Countertop | Commercial | Pipe-In |
| ys-120bk-65l | Hot Only | Countertop | Commercial | Pipe-In |
| ys-22g | Hot & Normal | Countertop | Commercial | Pipe-In |
| w500-hc | Hot & Cold | Floor-Standing | Commercial | Pipe-In |
| w500-2c | Purified / Ambient Only | Floor-Standing | Commercial | Pipe-In |
| w500-normal | Purified / Ambient Only | Floor-Standing | Commercial | Pipe-In |
| w500-4p-hc | Hot & Cold | Floor-Standing | Commercial | Pipe-In |
| w500-4p-cold | Purified / Ambient Only | Floor-Standing | Commercial | Pipe-In |
| k600-hc | Hot & Cold | Floor-Standing | Commercial | Pipe-In |
| k600-2c | Purified / Ambient Only | Floor-Standing | Commercial | Pipe-In |
| k-175-3f | Hot, Normal & Cold | Floor-Standing | Commercial | Pipe-In |
| k-195-3f | Hot, Normal & Cold | Floor-Standing | Commercial | Pipe-In |
| hb-800-hc | Hot & Cold | Floor-Standing | Commercial | Pipe-In |
| b2-hot-towel-machine | *N/A* | Countertop | Commercial | *N/A* |
 
### Whole-House Filtration (23)
 
| ID | WT | IT | BF | WS |
|---|---|---|---|---|
| semtec-frp-935 | Whole-House / Filtration System | Whole-House / Outdoor | Household | Pipe-In |
| semtec-frp-942 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| semtec-frp-1044 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| semtec-frp-1054 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| ss1034 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| ss1049 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| ss1099 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| e-1000-diy | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-159-5000 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| cr-159-8000 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| cr-159-6000 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-159-10000 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| cr-3500 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-3600 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-ultra-l5 | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-gb2500-plus | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| uf-3000d | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| uf-4000d | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| cr-gb1000-new | Whole-House / Filtration System | Whole-House / Outdoor | Household, Commercial | Pipe-In |
| p5-f50 | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| 5000jk | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| 6000jk | Whole-House / Filtration System | Whole-House / Outdoor | Commercial | Pipe-In |
| semtec-control-valves | *N/A* | Whole-House / Outdoor | Household, Commercial | *N/A* |
 
### Filters & Cartridges (4)
 
All filters hidden on this category.
 
| ID |
|---|
| filter-housings-imported |
| filter-housings-local |
| countertop-cartridge-filters |
| ceramic-filter-cartridges |
 
### Parts & Fittings (8)
 
All filters hidden on this category.
 
| ID |
|---|
| fittings-china |
| fittings-taiwan |
| fittings-korea |
| fittings-grey-high-quality |
| goose-neck-faucets |
| pressure-tanks |
| digital-water-timers |
| float-valves |
 
---
 
## Edge cases
 
Flagged for reference — no action needed, but worth knowing if Phase 3 or Phase 5 has to change anything.
 
1. **b2-hot-towel-machine** — not a water product. WT and WS are *N/A*. Filter UI on the product card should skip these chips rather than show blanks.
2. **semtec-control-valves** — accessory for the FRP master filter tanks. Placed in Whole-House Filtration so buyers see it near the tanks. WT and WS are *N/A*.
3. **st-2600h and pts-100w (tankless instant heating)** — sit on the counter but install like smart faucets. Kept under Undersink & Smart Faucets because the customer journey matches ("I want instant hot"), with IT tagged as Countertop.
4. **ae-007 (Countertop Alkaline System)** — mirror case. In Undersink & Smart Faucets but IT is Countertop.
5. **W500 variants without full specs** (w500-2c, w500-normal, w500-4p-cold, k600-2c) — WT set to Purified / Ambient Only since they only dispense cold or ambient. Confirmed against the catalogue page.
6. **w3501-3f-big-tank** — tagged Commercial only. Tank sizes are oversized for typical households; the regular w3501-3f covers the household + office case.
---
 
## Notes for Phase 5 (Wix CMS)
 
The taxonomy maps to Wix CMS reference fields as follows:
 
**One "Products" collection** with these fields on every row:
- `category` — reference to `Categories` collection (single-select, required)
- `water_type` — reference to `WaterTypes` collection (single-select, allow N/A)
- `install_type` — reference to `InstallTypes` collection (single-select, allow N/A)
- `best_for` — reference to `BestFor` collection (multi-select)
- `water_source` — reference to `WaterSources` collection (single-select, allow N/A)
**Five small reference collections** — one row per filter option each:
- `Categories` — 6 rows
- `WaterTypes` — 7 rows
- `InstallTypes` — 5 rows
- `BestFor` — 3 rows
- `WaterSources` — 3 rows
**Filter UI on category pages:**
- Home Water Dispensers, Undersink & Smart Faucets, Commercial Equipment, Whole-House Filtration → show all 4 filter groups
- Filters & Cartridges, Parts & Fittings → hide all 4 filter groups (customer picks from a list, not by filter)
**Multi-select handling:**
- `best_for` is the only multi-select field. Rendered on the product card as multiple chips ("Household", "Commercial").
- Wix's built-in filter UI handles multi-select natively — a customer selecting "Commercial" sees every product where "Commercial" is one of the values.
**N/A handling:**
- For `water_type` and `water_source`, allow the field to be left empty in the CMS. On the frontend, treat empty = "does not apply" — don't render the chip on the product card, and exclude the product from filter results for that field.
- Alternative: create an "N/A" row in the reference collection and filter it out of the filter UI. Either works.