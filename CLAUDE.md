# RIA Pure Water — Project Context

Agentic build of the RIA Pure Water catalogue site. The full plan lives in `docs/master-context.md` — read it on every session start, along with any phase brief I reference.

## Business
RIA Pure Water (public brand, domain target), RIA Home Sdn Bhd (registered company). Water dispensers and related products, catalogue-only site. 93 products in `docs/products.json`. Customer journey: browse → category → product detail → WhatsApp. No cart, no checkout.

## Tech stack
- Astro (static site generation)
- TailwindCSS v4 (brand tokens in `src/styles/global.css` under `@theme`; no tailwind.config.mjs)
- TypeScript strict
- Vercel for hosting (free Hobby tier)
- GitHub for source: https://github.com/finn1282/RiaPureWater.git

## Design authority
- Colours, typography, voice: `docs/brand-brief.md`
- Page section specs: `docs/page-specs.md`
- Product data shape: `docs/product-schema.md`
- Taxonomy and filters: `docs/taxonomy.md`
- Design system token values: `docs/design-system.md`
- Phase 4 mockups: see `docs/mockups/mockup-links.md`

Read these before implementing any UI. They are the authority — match them exactly, don't improvise.

## WhatsApp contact
- Primary line: 013-368 1349 → `wa.me/60133681349`
- Secondary line: 012-657 6870 → `wa.me/60126576870`
- CTA text everywhere: **Enquire on WhatsApp**
- Deep link format: `wa.me/60133681349?text=Hi%2C%20I%27m%20interested%20in%20[Product Name] ([MODEL]).`
- QR images at `public/images/qr/wa_qr_013.png` and `wa_qr_012.png`

## Working style
- Plain, accessible language in all copy
- Minimal, functional code comments — explain *why*, not *what*
- Iterative refinement, small commits, review-ready at every step
- Mobile-first — every page gets tested at 375px width first
- Never add marketing fluff, superlatives, or hype anywhere

## Checkpoint discipline
Phase 5 has 10 numbered checkpoints in `docs/phase-5-frontend-build.md`. Work through them in order. After each **STOP** marker, summarise what you did and wait for my approval ("approved" / "revise: [feedback]") before continuing.

## Git conventions
- `main` is deploy target — every push triggers Vercel preview/production
- Commit per logical change, not per file
- Commit message format: short imperative subject, optional body
- Attribution footer on every commit: