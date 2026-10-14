# RIA Pure Water — Sitemap
 
Final page list, URLs, and structure for the site. Phase 3 output. Referenced by Phase 4 (mockups) and Phase 5 (Wix build).
 
**Related files**
- `master-context.md` — project constants
- `brand-brief.md` — visual + voice direction
- `taxonomy.md` — categories and filter groups
- `products.json` — product data
- `page-specs.md` — section-by-section content spec for each page below
---
 
## Core pages
 
| # | Page | URL | Type | Notes |
|---|---|---|---|---|
| 1 | Home | `/` | Static | Landing, category tiles, WhatsApp CTA |
| 2 | Products (all) | `/products` | Static shell + CMS grid | All 93 products, all 4 filter groups on |
| 3 | Category page | `/category/{slug}` | Dynamic (1 template, 6 URLs) | Driven by Categories collection |
| 4 | Product Detail | `/product/{slug}` | Dynamic (1 template, 93 URLs) | Driven by Products collection |
| 5 | About | `/about` | Static | Company story, service area, contact routes |
| 6 | Contact | `/contact` | Static | WhatsApp QR (both lines), phone numbers, helper block |
 
**Physical page count in Wix:** 6 templates → 100+ URLs.
 
---
 
## The 6 category page URLs
 
Generated from one dynamic template driven by the `Categories` collection:
 
- `/category/home-water-dispensers`
- `/category/undersink-smart-faucets`
- `/category/commercial-equipment`
- `/category/whole-house-filtration`
- `/category/filters-cartridges`
- `/category/parts-fittings`
Filter bar visibility is controlled by a `show_filters` boolean on each category row:
- **Filters shown** — Home Water Dispensers, Undersink & Smart Faucets, Commercial Equipment, Whole-House Filtration
- **Filters hidden** — Filters & Cartridges, Parts & Fittings
---
 
## Product Detail URLs
 
Generated from one dynamic template driven by the `Products` collection. Each product's `slug` field forms the URL:
 
- `/product/{slug}` — 93 URLs total
---
 
## Global elements (not pages)
 
**Header (all pages)**
- Left: RIA logo (square lockup)
- Nav: Home · Products ▾ · About · Contact
- Right: [Enquire on WhatsApp] button — primary line (013-368 1349)
- Mobile: hamburger menu, logo centered, sticky WhatsApp icon-button
**Products dropdown**
- 6 category links (same as sitemap category URLs)
- Link: "View all products" → `/products`
**Footer (all pages)**
- Column 1: RIA wide logo + tagline + one-liner about the business
- Column 2: **Shop** — 6 category links
- Column 3: **Company** — About, Contact
- Column 4: **Get in touch** — WhatsApp QR (primary line), phone numbers, WhatsApp CTA button
- Bottom bar: © 2026 RIA Home. All rights reserved.
---
 
## System pages
 
- **404** — Friendly "not found" with links to Products and Contact
- **Search results** — Wix built-in, wired to the Products collection (searches `name`, `model`)
---
 
## Contact channel routing
 
**Primary WhatsApp CTA (site-wide default):** `wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20[context]`
- Used on header, Home hero, Home contact strip, Category contact strip, Products index contact strip, Product Detail (both top and bottom CTAs), About contact strip, Contact page Card 1
**Secondary WhatsApp CTA:** `wa.me/60126576870?text=Hi%2C%20I%27m%20interested%20in%20[context]`
- Used only on Contact page Card 2
**Primary phone:** `tel:+60133681349` (013-368 1349)
- Used on all secondary phone CTAs across the site
**Secondary phone:** `tel:+60126576870` (012-657 6870)
- Used only on Contact page
**Deep-link templating on Product Detail:**
`wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20[Product Name] ([MODEL]).`
Each product's WhatsApp CTA URL is generated at build time from its `name` and `model` fields.
 
---
 
## Candidate extras — decisions
 
Skipped for launch:
 
| Page | Decision | Reason |
|---|---|---|
| FAQ | Skip standalone | WhatsApp-first support model. Revisit when real questions accumulate. |
| Testimonials | Skip standalone | No collected material yet. Add a Home strip later when 4–5 real ones exist. |
| Blog | Skip standalone | Content-heavy to maintain, not on the critical path to WhatsApp. Revisit later. |
 
---
 
## Success criteria met by this sitemap
 
- **3 clicks max end-to-end:** Home → Category tile → Product card → WhatsApp CTA. ✓
- **Every path leads to WhatsApp within 2 clicks:** Header CTA is on every page; category strip and detail-page CTAs each fire in one tap. ✓
- **Adding a new product = one CMS row:** Product Detail is a single dynamic template. ✓
- **Mobile-first:** All page-level nav, filter, and CTA patterns designed for phone screens first. ✓
- **Ready for Chinese + BM extension:** No hardcoded language; copy sits in CMS or theme variables where possible. ✓