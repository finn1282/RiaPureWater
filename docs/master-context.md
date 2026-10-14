# RIA Pure Water — Master Project Context
 
Read this first in every phase chat. It stays constant across the whole build.
 
---
 
## Business
 
- **Public brand (advertising + domain):** RIA Pure Water
- **Registered company name:** RIA Home
- **Product line:** water dispensers and related products
- **Audience:** household + office + commercial (all three — the catalogue spans all)
- **Service area:** all of Malaysia
- **Language:** English only for launch. Chinese and BM added in a later phase after the English site is live.
## Contact channel
 
- **Primary:** WhatsApp
- **Secondary:** phone call
- Every product page, category page, home, and footer must lead to a WhatsApp CTA
- WhatsApp QR codes (both lines) displayed on Contact page and in the footer block
- WhatsApp deep-link format: `https://wa.me/60XXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20[product]`
- The `[product]` fragment is templated per product on Product Detail pages
## Assets available
 
- Logo PDFs (in Project Knowledge — `Pure water Logo Design.pdf`, `RIA_signboard_8x3ft.pdf`)
- Product catalogue PDFs (in Project — 79 pages across two files)
- WhatsApp QR PNGs (in Project — `wa_qr_0133681349.png`, `wa_qr_0126576870.png`)
- Product photos: extracted from catalogue PDFs during Phase 4.5 (scripted crop pipeline)
## Site design principles
 
- **Static-site generated** — every product page is pre-rendered at build time from `products.json`
- Adding a new product later = editing `products.json`, committing, and pushing — Vercel auto-deploys
- Standardised product page layout — every product looks the same, only content changes
- Mobile-first — most customers will land on their phone
- Every path leads to WhatsApp within 2 clicks
## Tech stack (locked at Phase 5 replan)
 
- **Framework:** Astro (static site generation, minimal JS, content-collection pattern fits our products.json cleanly)
- **Styling:** TailwindCSS, configured with the brand tokens from `brand-brief.md`
- **Language:** TypeScript
- **Hosting:** Vercel (free tier, auto-deploy on git push)
- **Repo:** GitHub (private)
- **Build-time data:** `products.json` + `taxonomy.md` → Astro content collection
**Why not Wix:** the Wix MCP has no public API for placing sections, binding repeaters, or styling pages. All page-level work would've been manual drag-and-drop in the Editor. Astro gives Claude direct control over every pixel through code.
 
## Naming conventions
 
**Files.** Lowercase, hyphens, no spaces. `products.json`, `brand-brief.md`, `taxonomy.md`.
 
**`id` is the URL slug.** Every product row in `products.json` has an `id` field (kebab-case). Wherever earlier docs say `slug`, treat it as the same value. **`id` is the canonical name going forward** — use it in Astro dynamic routes (`src/pages/product/[id].astro`), content collection schemas, and image folder names.
 
## Eight-phase build
 
| Phase | Chat | Output | Phase brief |
|---|---|---|---|
| 0 | Brand Brief | `brand-brief.md` | `phase-0-brand.md` |
| 1 | Product Extraction | `products.json`, `product-copy.md`, `image-refs.md`, `product-schema.md` | `phase-1-products.md` |
| 2 | Taxonomy | `taxonomy.md` | `phase-2-taxonomy.md` |
| 3 | Sitemap & Page Specs | `sitemap.md`, `page-specs.md` | `phase-3-sitemap.md` |
| 4 | Mockups | Design artifacts + `design-system.md` | `phase-4-mockups.md` |
| 4.5 | Image Extraction | `/public/images/products/{id}/*.jpg` committed to repo, `image-coordinates.json` | `phase-4.5-image-extraction.md` |
| 5 | Frontend Build (Astro + Vercel) | Deployed preview site + GitHub repo | `phase-5-frontend-build.md` |
| 6 | Customer Notes & Launch | `products.json` with `notes` populated, `launch-checklist.md`, published site on production domain | `phase-6-customer-notes.md` |
 
## Context-sharing conventions
 
**Saving outputs.** At the end of each phase, save the deliverable(s) into Project Knowledge. Code and binary outputs (images, repo files) live in the GitHub repo once Phase 5 starts; docs stay in Project Knowledge.
 
**Starting a new phase chat.** First message template:
> Read `master-context.md` and `phase-N-<name>.md` from Project Knowledge. Then read the prior-phase outputs listed in that brief. Begin at Checkpoint 1.
 
**Approval gates.** Every phase brief has numbered checkpoints. Claude stops at each, presents work, waits for your "approved" / "revise: [feedback]" before continuing.
 
**Nothing is committed until you approve the whole phase.** For code phases (4.5, 5, 6), nothing is pushed to the repo without your explicit go-ahead.
 
## User preferences (Zhen)
 
- Plain, accessible language
- Minimal, functional code comments
- Iterative refinement — small steps, review, adjust — never full rebuilds
## Success criteria for the whole project
 
- Customer lands, finds the right product category within 2 clicks, reads enough on the detail page to want it, taps WhatsApp — 3 clicks max end-to-end
- Site works on a phone (Lighthouse mobile ≥90)
- Adding a new product = edit `products.json`, commit, push — Vercel redeploys automatically
- Ready to extend to Chinese + BM via Astro's i18n routing without restructuring
- Every product has curated customer-facing notes before launch (Phase 6 gate)