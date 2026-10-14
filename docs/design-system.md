# RIA Pure Water — Design System
 
Phase 4 output. Text companion to the 5 mockup artifacts. Phase 5 (Wix build) uses this file as the source of truth for tokens, components, and patterns.
 
**Mockup artifacts (visual reference)**
- Design system sheet — tokens, buttons, card, inputs
- Home page — desktop + mobile
- Product Detail — desktop + mobile
- Category page — desktop + mobile (incl. filter sheet, empty state)
- Contact page — desktop + mobile
- About page — desktop + mobile
**Underlying source**
- `brand-brief.md` — brand direction (locked)
- `page-specs.md` — per-page content spec
- `taxonomy.md` — categories, filter groups
---
 
## 1. Colour tokens
 
CSS variable names and hex values. Set these as Wix global colour tokens so every component references them, not raw hex.
 
| Token | Hex | Usage |
|---|---|---|
| `--brand-green` | `#1F6F3A` | Primary buttons, active nav, H1/H2 headings, links, section dividers, footer background |
| `--brand-green-hover` | `#175A2E` | Button hover, link hover |
| `--brand-blue` | `#3AA9E0` | WhatsApp CTA button, water-related icons, info callouts |
| `--brand-blue-hover` | `#2691CB` | WhatsApp button hover |
| `--accent-lime` | `#4CBD3A` | "New", "Popular" badges only. One per screen max. |
| `--text-primary` | `#2D3748` | Body copy, product descriptions |
| `--text-muted` | `#6B7280` | Captions, meta info, labels, form hints |
| `--surface` | `#F5F7F8` | Alt section backgrounds, card backgrounds on white pages |
| `--background` | `#FFFFFF` | Default page background |
| `--border` | `#E5E7EB` | Card borders, dividers, input borders |
 
**Rules**
- Green = identity + primary action. Blue = *the* action (WhatsApp CTA).
- Never put green text on blue background or vice versa. Colour meets colour only through white space.
- Lime is a highlighter, not a colour. Pastel-fill chip style (`bg #EEF9EC`, text `#2E6B22`, border `#D7F0D1`) when used as a badge on product cards.
---
 
## 2. Typography
 
**Family:** Inter (Google Fonts). Load weights 400 / 500 / 600 / 700. Set as the site-wide default. System fallback stack: `'Inter', system-ui, -apple-system, sans-serif`.
 
### Type scale
 
| Level | Mobile (size / line) | Desktop | Weight | Use |
|---|---|---|---|---|
| H1 | 32 / 40 | 44 / 52 | 700 | Page title, hero headline |
| H2 | 24 / 32 | 32 / 40 | 700 | Section headings, product name on detail page |
| H3 | 20 / 28 | 24 / 32 | 600 | Sub-sections, card titles |
| H4 | 16 / 24 | 16 / 24 | 600 | Small headings, spec labels |
| Body-lg | 18 / 28 | 18 / 28 | 400 | Product intro paragraph, hero subhead |
| Body | 16 / 24 | 16 / 24 | 400 | Default body text |
| Body-sm | 14 / 20 | 14 / 20 | 400 | Captions, meta, form hints |
| Button | 16 / 24 | 16 / 24 | 600 | All CTAs — same size across the site |
| Overline | 12 / 16 (+0.08em tracking) | same | 600, uppercase | Category labels, breadcrumbs, section intros |
 
All sizes in px.
 
---
 
## 3. Spacing scale
 
8-point grid with a 4-step half for tight spots.
 
| Token | Value | Common use |
|---|---|---|
| `space-1` | 4px | Icon-to-text gap, tight padding |
| `space-2` | 8px | Chip spacing, small gaps |
| `space-3` | 12px | Card content padding |
| `space-4` | 16px | Default section padding (mobile) |
| `space-6` | 24px | Card padding, grid gap |
| `space-8` | 32px | Section padding (desktop containers) |
| `space-12` | 48px | Section vertical rhythm |
| `space-16` | 64px | Hero sections, major block separators |
 
---
 
## 4. Radius
 
| Token | Value | Use |
|---|---|---|
| `radius-sm` | 4px | Small chips, dense elements |
| `radius-md` | 8px | Buttons, inputs, applied-filter tags |
| `radius-lg` | 12px | Cards (product, trust, category tiles) |
| `radius-xl` | 16px | Hero image, large content blocks, QR cards |
 
Buttons are locked at 8px.
 
---
 
## 5. Shadow
 
One elevation only. Apply to product cards and raised panels.
 
```
box-shadow: 0 1px 2px rgba(16,24,40,.04), 0 1px 3px rgba(16,24,40,.06);
```
 
Do not add additional shadow tokens without a specific need — the design relies on borders + whitespace for separation, not shadow depth.
 
---
 
## 6. Buttons
 
Four variants. Same base size and padding across every page.
 
### Base
- Font: 16px, weight 600
- Padding: 12px 24px (mobile) / 14px 28px (desktop)
- Border-radius: 8px
- Border: 1px solid transparent (unless specified)
- Optional icon on the left, 16px, 8px gap from text
### Variants
 
| Variant | Background | Text | Border | Hover BG | Use |
|---|---|---|---|---|---|
| **WhatsApp CTA** | `--brand-blue` | white | — | `--brand-blue-hover` | THE primary action — "Enquire on WhatsApp" |
| **Primary** | `--brand-green` | white | — | `--brand-green-hover` | Brand action — "Browse products" |
| **Secondary (outline)** | white | `--brand-green` | 1px `--brand-green` | `--surface` | Alternative actions — "View category" |
| **Tertiary (text link)** | transparent | `--brand-green` | — | — | Inline links — "Or call 013-368 1349". Underlined with 3px offset. Smaller padding (8px 4px). |
 
### Size variants
- Default: `btn` (12/24 or 14/28)
- Large: `btn-lg` (14/26 or 16/32) — used on hero CTAs and bottom CTA strips
- Extra-large: `btn-xl` (16/30, 17px font) — used on the Product Detail primary WhatsApp CTA
### CTA text (locked)
- Primary: **"Enquire on WhatsApp"**
- Secondary (phone fallback): **"Or call 013-368 1349"**
- Reassurance line under CTA: *"We reply on WhatsApp within business hours."*
---
 
## 7. Components
 
### Header (global)
- Background white, 1px bottom border (`--border`)
- Padding: 16px 24px (desktop), 14px 16px (mobile)
- Left: logo mark + "RIA Pure Water" wordmark
- Centre (desktop): nav links — Products, Categories, About, Contact. Active link in `--brand-green`, weight 600.
- Right (desktop): WhatsApp CTA button
- Mobile: hamburger button replaces nav + CTA
### Footer (global, full)
- Background `--brand-green`, white text
- Padding 48px 24px 24px
- 4-column grid on desktop (1.3fr 1fr 1fr 1fr), stacked on mobile
  - Column 1: logo + brand description (2 lines)
  - Column 2: Shop — category links (6)
  - Column 3: Company — About, Contact, All products
  - Column 4: Reach us — WhatsApp numbers + optional QR
- Bottom bar: 1px top border (white @ 15%), copyright + tagline
- Column labels: 14px, 600, uppercase, white @ 72%
### Footer (slim) — Product Detail only
- Same brand-green background
- Single row: logo on left, 4 inline links on right
- Padding 32px 24px
- Used because the detail page already has 3 WhatsApp CTAs — a full footer with more link density competes
### Hero (Home)
- Padding 56px 24px desktop, 32px 16px mobile
- 2-col grid desktop (1.1fr 1fr, 48px gap), stacked mobile
- H1 with brand-green span for emphasis fragment
- Body-lg subhead in `--text-muted`
- Two CTAs: primary green + WhatsApp blue, both `btn-lg`
- Right side: hero image placeholder (4:3, soft blue-green gradient, dashed border, label)
### Page header (Category / All products / Contact / About)
- Overline (12px, uppercase, `--brand-green`, +0.08em tracking)
- H1 (desktop 44/52, mobile 28/36)
- Body-lg sub in `--text-muted`
- On Category: meta row below ("21 products")
### Category tile (Home)
- Card: white, 1px border, 12px radius, 24px padding
- Icon (44×44, 10px radius, `#EAF4EC` background, `--brand-green` stroke)
- H3 category name (18px, weight 600)
- Body-sm product count in `--text-muted`
- Hover: border → `--brand-green`, lift 2px
- Grid: 3-col desktop, 2-col mobile
### Trust / Why RIA card
- White, 1px border, 12px radius, 24px padding
- Icon tile (40×40, `#EAF4EC`, `--brand-green`)
- H3 (18px, 600)
- Body (15px / 22px, `--text-muted`)
### Product card
Used on Home Popular picks, Category grid, All products, Related products, Product carousel.
- White, 1px border, 12px radius, 1px shadow
- Photo region: square (aspect-ratio 1/1), `--surface` background
- Body padding: 14px 16px 16px
  - Name: 15px / 22px, weight 600, max 2 lines
  - Model: 13px, `--text-muted`
  - Chip row: up to 3 chips (recommend Water Type + Install Type + Best For; adjust per category)
  - "View →" link in `--brand-green`, weight 600
- Whole card clickable to `/product/{id}`
- Hover: border → `--brand-green`
### Chip (display-only, on cards)
- 11px, padding 5px 9px, radius 999px
- Background `--surface`, text `--text-muted`, 1px border `--border`
- Lime variant for "Popular" badges: `#EEF9EC` / `#2E6B22` / `#D7F0D1`
### Filter chip (interactive, on Category + All products)
- 14px, weight 500, padding 7px 14px, radius 999px
- Inactive: white, text `--text-primary`, 1px `--border`
- Hover: border → `--brand-green`
- Active: `--brand-green` background, white text, white `✓` prefix with 6px gap
### Applied-filter tag
- Shown in the "Showing:" row above the product grid
- `--brand-green` background, white text, padding 5px 10px, radius 999px
- Includes `×` button to remove the single filter
- "Clear all" link appears at the end: `--brand-green`, underlined, weight 600
### Filter bar (desktop, Category page)
- `--surface` background, 1px border, 12px radius, 20px 24px padding
- Rows: group label (140px fixed) + chip row
- Dashed border between rows
### Filter trigger (mobile)
- Button with filter icon + "Filters" + count badge
- Count badge: `--brand-green`, white, min 18px square, radius 999px
- Right side of row: result count ("4 of 21")
### Filter bottom sheet (mobile)
- Dim backdrop (`rgba(0,0,0,.4)`), anchors to bottom
- Sheet: white, radius 20px 20px 0 0, max-height 85%
- Drag handle at top (44×4px pill, `#d0d5d9`)
- Header: title + close ×, 1px bottom border
- Body: filter groups stacked, 20px padding, 20px between groups
- Footer: 1px top border, Clear (ghost button) + "Show N results" (primary) side-by-side
### Empty state (Category / All products, when filters return 0)
- `--surface` background, 1px dashed border, 12px radius, 48px padding, centred
- H3 "No products match those filters"
- Body in `--text-muted`
- Two CTAs: WhatsApp + "Clear filters"
### Specs table (Product Detail)
- 1px border wrapper, 12px radius, overflow hidden
- 2-col rows: 220px label / 1fr value, 14px 20px padding
- Alternating row background (`--surface` on odd rows) on desktop
- Mobile: stacks to 1-col, label becomes uppercase overline (12px)
- Empty rows hidden by CMS logic
### Highlights (KSP) list
- 2-col grid desktop (14px vertical gap, 32px horizontal), 1-col mobile
- Each item: 32×32 icon tile (`#EAF4EC`, `--brand-green`) + body text
- Body: 15px / 22px
### Sticky WhatsApp bar (mobile, Product Detail only)
- Fixed to bottom of viewport (`position: sticky; bottom: 0`)
- White background, 1px top border
- Padding 10px 16px + `env(safe-area-inset-bottom)`
- Single full-width WhatsApp button, text "Enquire about {MODEL}" (templated with product model number)
- Add bottom padding to footer to clear it
### Contact strip (Home / Category / Product Detail / About)
- `--surface` background, centred text
- Padding 48–56px vertical, 24px horizontal
- H2 (26–28px), body in `--text-muted`
- Two CTAs: WhatsApp + "Or call 013-368 1349" (or "Or visit Contact" on About)
### Breadcrumbs (every non-home page)
- Padding 20px 0 (12px on mobile)
- 13px (12px mobile), `--text-muted`
- Separator: `›` in `#c3c7cc`
- Last item in `--text-primary`, weight 500
### Form input (if needed later)
- 10px 12px padding, 1px border `--border`, 8px radius, white background
- Focus: 2px outline `--brand-green`, 1px offset, border colour changes to `--brand-green`
- Label above input, 14px weight 600
- Hint below, 13px `--text-muted`
---
 
## 8. WhatsApp link format
 
Deep-link format for every WhatsApp CTA:
 
```
https://wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20[PRODUCT]
```
 
- `60133681349` — primary line (013-368 1349, Malaysia country code 60)
- `60126576870` — secondary line (012-657 6870)
- `[PRODUCT]` — URL-encoded. On product pages: `{Product Name} ({MODEL})`. On generic pages: `RIA Pure Water`. In Wix, template this per Product collection row.
### Recommended Wix setup
Store both numbers and the deep-link template as Wix site variables (or a single-row Site Settings CMS collection). One edit updates everywhere.
 
---
 
## 9. Icons
 
- Icon set: **Lucide** (matches brand-brief and taxonomy)
- Rendered in `--brand-green`, stroke-only (1.75px weight), no fills
- Sizes:
  - Nav / small inline: 16px
  - KSP tiles / trust cards: 18–22px
  - Category tiles: 24px
- Load via Lucide icon library in Wix, or import matching SVGs
### Category icon mapping (from `taxonomy.md`)
| Category | Lucide icon |
|---|---|
| Home Water Dispensers | `glass-water` |
| Undersink & Smart Faucets | `droplets` |
| Commercial Equipment | `building-2` |
| Whole-House Filtration | `shield-check` |
| Filters & Cartridges | `filter` |
| Parts & Fittings | `wrench` |
 
Populate the `icon` field on each row of the Wix `Categories` collection with these string values.
 
---
 
## 10. Logo
 
- **Primary square lockup:** `Pure_water_Logo_Design.pdf` — use for site header, favicon source, social
- **Wide lockup:** `RIA_signboard_8x3ft.pdf` — use where horizontal space allows (footer, letterhead)
- The "ria" mark + water droplet IS the identity. The tagline *"Pure Water for Every Home"* appears on the logo itself — don't duplicate it as page copy near the logo.
- Mockups use a placeholder droplet-in-a-circle mark. In Wix, replace with the actual PDF export (PNG or SVG at 2×).
Header lockup size: ~32px tall. Footer lockup: 32–40px tall, inverted on brand-green background (white logo mark bg, green droplet).
 
---
 
## 11. Images and photography
 
### Catalogue extraction (now)
- Prefer images already on white / near-white backgrounds
- Background-remove busy catalogue shots before uploading (remove.bg or similar)
- Square (1:1) aspect ratio for grid consistency
- Minimum 800×800 for cards, 1600×1600 for hero use
### Reshooting (later)
- Background: pure white or `--surface` (`#F5F7F8`)
- Lighting: soft diffused, front-left
- Angle: slight 3/4 view for dispensers
- Framing: product fills ~70%
- Consistency beats perfection — one style across 20 photos > mixed styles
### Hero image (Home)
- 4:3 aspect ratio
- Not yet supplied by Zhen — placeholder in mockup
---
 
## 12. Responsive behaviour
 
**Breakpoint:** single break at 768px for most layouts. Mobile-first — write base styles for mobile, override up at ≥768px.
 
### Grid behaviour
| Component | Mobile | Desktop |
|---|---|---|
| Category tiles (Home / About) | 2 cols | 3 cols |
| Product grid (Category / All products) | 2 cols | 3–4 cols |
| Popular picks (Home) | Horizontal snap-scroll (70% card width) | 4 cols |
| Related products (Product Detail) | Horizontal snap-scroll (65%) | 4 cols |
| Trust / Why RIA | 1 col | 3 cols |
| What we sell (About) | 1 col | 3 cols |
| WhatsApp cards (Contact) | 1 col | 2 cols |
| Footer | 1 col stacked | 4 cols |
| Hero (Home) | Stacked | 2 cols (1.1fr 1fr) |
| Product hero (Product Detail) | Stacked | 2 cols (1fr 1fr) |
 
### Container widths
- Content container: max 1120px, 24–32px side padding
- Full-bleed sections (hero, contact strip, footer): no max width, content inner wrapper at 1120px
---
 
## 13. Pre-launch checklist for Phase 5
 
- [ ] Install Inter (Google Fonts, weights 400/500/600/700) as site default
- [ ] Create Wix global colour tokens matching the table in §1
- [ ] Build Products CMS collection per `page-specs.md` CMS field summary
- [ ] Build Categories CMS collection with icon field populated from §9 table
- [ ] Build 5 taxonomy reference collections (Water Type, Install Type, Best For, Water Source, category)
- [ ] Store both WhatsApp numbers and deep-link template as Wix site variables
- [ ] Upload logo PDF/PNG and replace placeholder droplet in header + footer
- [ ] Replace hero image placeholder with real product shot (Zhen to supply)
- [ ] Verify sticky WhatsApp CTA on mobile Product Detail
- [ ] Verify filter bottom-sheet pattern on mobile Category + All products
- [ ] Verify empty-state block renders when filters return 0
- [ ] Verify `--surface` sections alternate correctly with `--background` sections
- [ ] Confirm Breadcrumbs render on every non-home page
- [ ] Confirm WhatsApp link opens in app (not browser) on mobile — test on both Android and iOS
---
 
## 14. Open items carried to later phases
 
**Pending from Zhen (Phase 1–3 todos still open)**
- Hero product shot
- Which products to mark `featured`
- Extracted product photos (2–3 for Phase 4 was skipped — supply before Phase 5 goes live)
- Rewrite About "Our story" in own voice (placeholder works for launch)
- Business hours on Contact page
- Business address on Contact page (or confirm it stays hidden)
**Phase 6 gate**
- Curated customer-facing `notes` field per product (replaces `raw_notes` fallback in Product Detail's "Good to know" section)
**Later / optional**
- Testimonials section on Home once real testimonials exist
- FAQ section on Contact once recurring questions emerge
- Blog for SEO
- Chinese + BM language versions (English is launch, structure already ready)