# RIA Pure Water — Page Specs
 
Section-by-section content spec for every page in the sitemap. Phase 3 output. Phase 4 mocks these; Phase 5 builds them.
 
**Related files**
- `sitemap.md` — page list and URLs
- `brand-brief.md` — colours, typography, voice
- `taxonomy.md` — categories and filter groups
- `products.json` — product data
- `product-copy.md` — customer-facing product copy
**Global patterns used on every page**
- Header — logo, main nav, WhatsApp CTA (primary line)
- Footer — logo, category links, company links, contact block with WhatsApp QR
- Breadcrumbs — appear on every non-home page
---
 
## Page: Home (`/`)
 
**Purpose:** Land the customer, show what RIA sells, get them to a category (or WhatsApp) fast.
 
### Sections
 
1. **Header** (global)
2. **Hero**
   - H1: **Clean water for your home, office, or business**
   - Sub (Body-lg): *Water dispensers, undersink systems, and whole-house filtration — delivered across Malaysia.*
   - Primary CTA: **Browse products** → `/products`
   - Secondary CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - Visual: hero product shot (Zhen to supply)
3. **Category tiles**
   - Overline: **SHOP BY CATEGORY**
   - H2: **Find what fits your space**
   - 6 tiles (2 cols mobile / 3 cols desktop) — icon, category name, product count
   - Each links to `/category/{slug}`
   - **CMS reads:** `Categories` — name, slug, icon, product_count
4. **Why RIA** (trust strip, three columns)
   - Overline: **WHY RIA**
   - Card 1: **Nationwide delivery** — Serving households and businesses across Malaysia
   - Card 2: **Every setup covered** — Countertop to whole-house, we fit your space
   - Card 3: **Real support on WhatsApp** — Ask before you buy, get help after
5. **Popular picks**
   - Overline: **POPULAR PICKS**
   - H2: **Customer favourites**
   - Horizontal scroll of 4–6 product cards (photo, name, filter chips, "View" link)
   - Each links to `/product/{slug}`
   - **CMS reads:** `Products` where `featured = true`
   - Section auto-hides if no products are marked featured
6. **Contact strip**
   - Background: `--surface`
   - H2: **Not sure which one to pick?**
   - Body: *Tell us your space and daily water needs. We'll recommend the right unit and quote installation.*
   - Primary CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - Secondary: **Or call 013-368 1349** → `tel:+60133681349`
7. **Footer** (global)
### CMS reads
- `Categories` — for tiles and footer category list
- `Products` where `featured = true` — for Popular picks
### Inputs still needed from Zhen
- Hero product shot
- Which products to mark `featured`
---
 
## Page: Product Detail (`/product/{slug}`)
 
**Purpose:** Give a customer everything they need to decide, then get them to WhatsApp with the product referenced.
 
### Sections
 
1. **Header** (global)
2. **Breadcrumbs** — Home › [Category name] › [Product name]
3. **Product hero** (2-col desktop, stacked mobile)
   - **Left:** main product photo (1:1) + thumbnail strip if `gallery_images[]` has more than one
   - **Right:**
     - Overline: category name (linked to `/category/{slug}`)
     - H1/H2: **Product name**
     - Model in `--text-muted`: *Model: [MODEL]*
     - Intro paragraph (Body-lg, from `intro`)
     - Filter chips row (display-only): Water Type · Install Type · Best For · Water Source
     - Primary CTA: **Enquire on WhatsApp** — deep link `wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20[Product Name] ([MODEL]).`
     - Secondary CTA: **Or call 013-368 1349** → `tel:+60133681349`
     - Reassurance line: *We reply on WhatsApp within business hours.*
4. **Highlights** (KSPs)
   - H2: **Highlights**
   - 3–6 bullets, each with a line icon (brand green) + one-line benefit
   - Section hides if `ksps[]` is empty
5. **Specifications**
   - H2: **Specifications**
   - 2-col table on desktop, stacked rows on mobile
   - Rows populated from the `specs` object; empty fields hide
6. **Features** (long-form)
   - H2: **Features**
   - Bulleted list from `specs.features[]`
7. **Good to know** (conditional)
   - H2: **Good to know**
   - Renders only if `raw_notes` has content
   - Post-launch: swap `raw_notes` for a curated customer-facing `notes` field once written per product
8. **Related products**
   - H2: **You might also consider**
   - 3–4 product cards, horizontal scroll on mobile
   - Logic: same category, excluding current product, first 4 alphabetically
9. **Bottom CTA strip**
   - Background: `--surface`
   - H2: **Ready to order [Product name]?**
   - Body: *Message us on WhatsApp with your delivery location and we'll confirm stock, price, and installation.*
   - Primary CTA: **Enquire on WhatsApp** (same product-specific deep link)
   - Secondary: **Or call 013-368 1349**
10. **Footer** (global)
### CMS reads
From `Products`: `name`, `model`, `slug`, `category` (ref), `intro`, `ksps[]`, `specs.*`, `raw_notes`, `main_image`, `gallery_images[]`, `water_type`, `install_type`, `best_for`, `water_source` (refs)
 
### Edge cases
- `b2-hot-towel-machine` and `semtec-control-valves` — no Water Type / Water Source. Chip row skips empty refs.
- Products with no curated intro — placeholder ("Product details coming soon.") until copy is added.
- Products with only main image — thumbnail strip hides.
---
 
## Page: Category (`/category/{slug}`)
 
**Purpose:** Show every product in one category as a filterable grid.
 
### Sections
 
1. **Header** (global)
2. **Breadcrumbs** — Home › [Category name]
3. **Category header**
   - Overline: **CATEGORY**
   - H1: Category name
   - Body-lg: category description (per category, listed below)
   - Meta: product count (e.g. "21 products")
   **Category descriptions**
   - **Home Water Dispensers** — *Countertop, floor-standing, bottle-type, and portable dispensers for home and office use.*
   - **Undersink & Smart Faucets** — *Under-sink filter systems, smart touch faucets, alkaline systems, tankless purifiers.*
   - **Commercial Equipment** — *Water boilers, water coolers, and other commercial appliances.*
   - **Whole-House Filtration** — *Master water filters (FRP and stainless steel) and outdoor UF systems.*
   - **Filters & Cartridges** — *Replacement ceramic cartridges and filter housings.*
   - **Parts & Fittings** — *Fittings, faucets, pressure tanks, valves, and timers.*
4. **Filter bar** (conditional — shown for first 4 categories, hidden for last 2)
   - 4 filter groups as chip toggles: Water Type, Install Type, Best For, Water Source
   - Multi-select within group (OR), AND across groups
   - Applied filters row above grid with "Clear all"
   - Mobile: filter button opens a bottom sheet
   - Only shows chip options that exist within the current category's products
5. **Product grid**
   - 2 / 3 / 4 columns responsive
   - **Product card:** photo (1:1), name (H4), model (`--text-muted`), filter chips (Water Type · Install Type · Best For)
   - Whole card links to `/product/{slug}`
   - Sorted alphabetically by name; overridable later with a manual `sort_order` field
6. **Empty state** (shown when filters return zero results)
   - H3: **No products match those filters**
   - Body: *Try removing a filter, or ask us on WhatsApp — we can recommend one for your setup.*
   - CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - "Clear filters" link
7. **Contact strip**
   - Background: `--surface`
   - H2: **Not sure which [noun] fits your space?** (noun from `contact_prompt_noun`)
   - Body: *Tell us your setup and daily water needs. We'll recommend the right one and quote installation.*
   - Primary CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - Secondary: **Or call 013-368 1349**
8. **Footer** (global)
### CMS reads
- `Categories` — `name`, `slug`, `description`, `contact_prompt_noun`, `show_filters`
- `Products` filtered by `category = [current]` — card fields
- Reference collections for filter chip options
### `contact_prompt_noun` values
- Home Water Dispensers → "dispenser"
- Undersink & Smart Faucets → "system"
- Commercial Equipment → "unit"
- Whole-House Filtration → "system"
- Filters & Cartridges → "cartridge"
- Parts & Fittings → "part"
---
 
## Page: Products index (`/products`)
 
**Purpose:** One page showing every product across all 6 categories, filterable.
 
### Sections
 
1. **Header** (global)
2. **Breadcrumbs** — Home › All products
3. **Page header**
   - Overline: **CATALOGUE**
   - H1: **All products**
   - Body-lg: *Every water product we sell, one page. Filter by what you need or browse by category below.*
   - Meta: *"93 products"*
4. **Category quick-jump strip**
   - Horizontal scroll on mobile, single row on desktop
   - 6 small pills — category name + product count
   - Each links to `/category/{slug}`
5. **Filter bar** (all groups always shown)
   - 5 filter groups: **Category** (new, first), Water Type, Install Type, Best For, Water Source
   - Same mechanics as Category page (multi-select within, AND across)
   - Products without a Water Type or Water Source value (`b2-hot-towel-machine`, `semtec-control-valves`) show when no filter in that group is active; excluded when one is applied
6. **Product grid** — same card design and layout as Category page, sorted alphabetically
7. **Empty state** — same pattern as Category page
8. **Contact strip**
   - Background: `--surface`
   - H2: **Overwhelmed by choice?**
   - Body: *Tell us your setup — home, office, or business — and how much water you use in a day. We'll narrow it down.*
   - Primary CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - Secondary: **Or call 013-368 1349**
9. **Footer** (global)
### CMS reads
- `Categories` — for quick-jump strip
- `Products` — all rows, card fields
- All 5 reference collections for filter chip options
### Reuse note
This page shares its grid and filter mechanics with the Category template. In Wix, one shared repeater component with a different data source.
 
---
 
## Page: Contact (`/contact`)
 
**Purpose:** Give the customer every way to reach RIA, with WhatsApp as the obvious choice.
 
### Sections
 
1. **Header** (global)
2. **Breadcrumbs** — Home › Contact
3. **Page header**
   - Overline: **GET IN TOUCH**
   - H1: **Talk to us**
   - Body-lg: *We reply on WhatsApp within business hours. Message us with your product, location, and setup — we'll come back with stock, price, and installation.*
4. **WhatsApp block** (2-col desktop, stacked mobile)
   **Card 1 — Line 1**
   - QR image: `wa_qr_0133681349.png`
   - Number: **013-368 1349**
   - CTA: **Open WhatsApp** → `wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20RIA%20Pure%20Water`
   **Card 2 — Line 2**
   - QR image: `wa_qr_0126576870.png`
   - Number: **012-657 6870**
   - CTA: **Open WhatsApp** → `wa.me/60126576870?text=Hi%2C%20I%27m%20interested%20in%20RIA%20Pure%20Water`
   Helper line under both cards: *Scan the QR from your phone camera, or tap "Open WhatsApp" if you're already on your phone.*
5. **Phone block**
   - H2: **Prefer to call?**
   - Body: *We're happy to talk. Call either line during business hours.*
   - Row 1: **013-368 1349** → `tel:+60133681349`
   - Row 2: **012-657 6870** → `tel:+60126576870`
6. **Business info block**
   - H2: **RIA Home Sdn Bhd**
   - **Serving:** All of Malaysia
   - Business hours row: **omitted for launch** (post-launch todo)
   - Address row: **omitted for launch** (post-launch todo)
7. **What to include in your message** (helper block)
   - Background: `--surface`
   - H3: **To speed things up, tell us:**
   - Bullets:
     - The product you're interested in (or your setup if you're not sure yet)
     - Your delivery address or town
     - Whether you need installation
     - Household, office, or commercial use
8. **Footer** (global)
### CMS reads
None — fully static.
 
**Recommendation:** store the two phone numbers, the WhatsApp deep-link templates, and any future business hours as Wix site variables (or a single-row "Site Settings" CMS collection). One edit propagates everywhere.
 
---
 
## Page: About (`/about`)
 
**Purpose:** Build trust. Company story, service area, why customers pick RIA.
 
### Sections
 
1. **Header** (global)
2. **Breadcrumbs** — Home › About
3. **Page header**
   - Overline: **ABOUT US**
   - H1: **Clean water, delivered simply**
   - Body-lg: *RIA Pure Water supplies water dispensers, filtration systems, and commercial water equipment to homes, offices, and businesses across Malaysia.*
4. **Our story**
   - H2: **Who we are**
   - Placeholder draft (Zhen to rewrite):
     *RIA Pure Water is the public brand of RIA Home Sdn Bhd, a Malaysian business built around one straightforward idea — everyone deserves clean, reliable drinking water without the fuss.*
     *We stock a full range: countertop and floor-standing dispensers for the home, undersink and smart-faucet systems for the kitchen, whole-house filtration for the whole family, and commercial equipment for offices, restaurants, and hospitality.*
     *We handle delivery and installation across Malaysia, and we're always a WhatsApp message away if you need advice picking the right unit.*
5. **What we sell** (category strip)
   - H2: **What we sell**
   - 6 small cards, one per category (icon, name, short line)
   - Each links to `/category/{slug}`
   - **CMS reads:** `Categories`
6. **Why RIA** (three-column strip)
   - Overline: **WHY RIA**
   - Card 1: **A full range in one place** — From portable dispensers to whole-house filtration, we cover every setup
   - Card 2: **Delivery nationwide** — Serving households and businesses across Malaysia
   - Card 3: **Talk to us before you buy** — WhatsApp us your situation, we'll recommend the right fit
7. **Service area**
   - H2: **Where we serve**
   - Body: *We deliver and install across Malaysia. Message us with your town or postcode and we'll confirm coverage and lead time.*
   - No map for launch
8. **Contact strip**
   - Background: `--surface`
   - H2: **Ready to talk?**
   - Body: *We reply on WhatsApp within business hours. Tell us your product, location, and setup — we'll come back with stock, price, and installation.*
   - Primary CTA: **Enquire on WhatsApp** → primary WhatsApp link
   - Secondary: **Or visit Contact** → `/contact`
9. **Footer** (global)
### CMS reads
`Categories` — for the "What we sell" strip.
 
### Inputs still needed from Zhen
- Rewrite "Our story" in own voice when ready (placeholder works for launch)
---
 
## CMS field summary (for Phase 5)
 
The page specs above imply these CMS fields on the main `Products` collection, beyond the taxonomy reference fields already spec'd in `taxonomy.md`:
 
**Content fields**
- `name` — display name
- `model` — model number
- `slug` — URL fragment
- `intro` — short paragraph, Product Detail hero
- `ksps[]` — 3–6 highlight bullets
- `specs.dimensions`, `specs.capacity`, `specs.power`, `specs.other.*` — spec table rows
- `specs.features[]` — long-form features list
- `raw_notes` — Good to know block (falls back until curated `notes` is written)
- `notes` — customer-facing curated notes (post-launch, replaces `raw_notes` in the template)
**Media fields**
- `main_image` — hero image on product card + detail page
- `gallery_images[]` — additional images
**Flags**
- `featured` — boolean, used by Home Popular picks section
- `sort_order` — optional integer, overrides alphabetical sorting on Category pages (add later if needed)
The `Categories` collection needs these fields beyond `name` and `slug`:
- `description` — Category page hero copy
- `icon` — for Home tiles and About "What we sell" strip
- `product_count` — rollup or manual count for tiles
- `contact_prompt_noun` — dispenser / system / unit / cartridge / part
- `show_filters` — boolean, controls filter bar visibility
---
 
## Post-launch todos captured during Phase 3
 
- Write curated customer-facing `notes` field per product (replaces `raw_notes` fallback in Product Detail's "Good to know" section)
- Fill in business hours on Contact page
- Decide on and fill in a physical/business address on Contact page, or confirm it stays hidden
- Rewrite About "Our story" in Zhen's own voice
- Consider Testimonials section on Home once real testimonials exist
- Consider FAQ section on Contact once real recurring questions emerge
- Consider Blog for SEO in a later phase