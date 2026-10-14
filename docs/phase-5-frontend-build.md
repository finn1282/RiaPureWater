# Phase 5 — Frontend Build (via Claude Code)

## Overview
Phase 5 runs in **Claude Code** (the terminal CLI), not a Claude.ai chat. Claude Code reads and writes files directly on your machine, runs commands, commits to git, and iterates against the deployed Vercel preview — much more efficient than relaying every edit through chat.

**Your workflow:**
1. Prepare the project folder with all planning context (checklist below)
2. Create `CLAUDE.md` — Claude Code auto-loads it every session
3. Open the folder in a terminal, run `claude`, paste the kickoff prompt
4. Approve each checkpoint as it finishes — same approval-gate discipline as every other phase

---

## Pre-flight checklist

### Accounts & tools
- [ ] **Node.js 20+** installed (`node --version` to verify)
- [ ] **Claude Code** installed. One of:
  - macOS / Linux / WSL: `curl -fsSL https://claude.ai/install.sh | bash`
  - macOS Homebrew: `brew install --cask claude-code`
  - Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`
  - Verify in a fresh terminal: `claude --version`
- [ ] **GitHub account** — create a new empty private repo named `ria-pure-water`. Do NOT initialise with README; Claude Code will do it.
- [ ] **Vercel account** (free Hobby tier is enough for launch). Install the CLI: `npm install -g vercel`
- [ ] **Git configured locally** — `git config --global user.name` and `user.email` both set

### Project folder structure
Create `~/projects/ria-pure-water/` (or wherever you keep code). Populate it before starting Claude Code:

```
ria-pure-water/
├── CLAUDE.md                         # Template below — Claude Code auto-reads this
├── docs/
│   ├── master-context.md             # Copy from Project Knowledge
│   ├── brand-brief.md                # Copy
│   ├── product-schema.md             # Copy
│   ├── products.json                 # Copy
│   ├── product-copy.md               # Copy
│   ├── taxonomy.md                   # Copy
│   ├── sitemap.md                    # Copy
│   ├── page-specs.md                 # Copy
│   ├── design-system.md              # Copy (Phase 4 output)
│   └── mockups/
│       ├── mockup-links.md           # List of Phase 4 Design artifact URLs
│       └── *.png                     # Optional: PNG exports of mockups for offline reference
├── public/
│   ├── images/
│   │   ├── products/
│   │   │   ├── jx-1s/01.jpg          # From Phase 4.5
│   │   │   ├── nb-32f-bl/01.jpg
│   │   │   └── ... (all 93 product folders)
│   │   └── qr/
│   │       ├── wa_qr_013.png         # From Project Knowledge
│   │       └── wa_qr_012.png
│   └── logos/
│       ├── logo-primary.svg          # Convert the catalogue PDF to SVG beforehand
│       └── logo-wide.svg
└── (empty root — Claude Code scaffolds Astro here)
```

**Why copy docs into the folder:** Claude Code only sees files in its working directory. Copies in `docs/` make the planning context available for reference during the build. The Project Knowledge versions stay the source of truth; edits go back there through the Projects tool later if needed.

**Logo conversion:** the logos are PDFs. Before running Claude Code, convert them to SVG (Illustrator, Inkscape, or an online converter) or at minimum PNG, and put them in `public/logos/`. Claude Code can't render PDFs as web images.

**Mockup links:** in `docs/mockups/mockup-links.md`, paste the claude.ai Design artifact URLs from Phase 4 — one per template (Home, Category, Product Detail, Contact, About, design-system). Claude Code can't open those URLs directly, but you can describe the mockup when needed, and PNG exports of each (even phone screenshots of the artifact canvas) help Claude Code match the design.

---

## CLAUDE.md template

Save this as `CLAUDE.md` in the project root. Edit the bracketed values before starting.

```markdown
# RIA Pure Water — Project Context

Agentic build of the RIA Pure Water catalogue site. The full plan lives in `docs/master-context.md` — read it on every session start, along with any phase brief I reference.

## Business
RIA Pure Water (public brand, domain target), RIA Home Sdn Bhd (registered company). Water dispensers and related products, catalogue-only site. 93 products in `docs/products.json`. Customer journey: browse → category → product detail → WhatsApp. No cart, no checkout.

## Tech stack
- Astro (static site generation)
- TailwindCSS (brand tokens configured in tailwind.config.mjs)
- TypeScript strict
- Vercel for hosting (free Hobby tier)
- GitHub for source: [paste your repo clone URL here]

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
  ```
  Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01Engrvq1sSiSuTKkPoj2v9u
  ```
- PRs: footer `🤖 Generated with [Claude Code](https://claude.com/claude-code)`
- Never commit `.env`, API keys, Vercel tokens, or anything from `.vercel/` — add to `.gitignore` on day one

## Build & deploy
- Run `npm run build` locally before pushing to catch build errors
- Vercel auto-deploys on push to `main`
- Dev-only routes (like `/design-system` demo) go behind `import.meta.env.DEV` or get removed before Phase 6

## Things to never do
- No tracking pixels, analytics, or third-party scripts without asking me
- No stock photos or AI-generated images — product photos come from `public/images/products/{id}/` only
- No invented copy — product bios, KSPs, and specs come from `docs/products.json` and `docs/product-copy.md`
- No cookie banner, popup, or email signup
- No price displays (RIA is contact-for-price)
```

---

## Kickoff prompt

Paste as your first message to Claude Code:

> Build the RIA Pure Water catalogue site. Read `CLAUDE.md` and the planning docs in `docs/` for full context — `master-context.md`, `brand-brief.md`, `product-schema.md`, `products.json`, `taxonomy.md`, `sitemap.md`, `page-specs.md`, `design-system.md`, and `product-copy.md`.
>
> We'll work Phase 5 checkpoint-by-checkpoint from `docs/phase-5-frontend-build.md`. Stop and wait for my approval at every **STOP** marker. Begin at Checkpoint 1: scaffold Astro + TypeScript + TailwindCSS, initialise git with my repo (URL in CLAUDE.md), and set up Vercel. Ask any clarifying questions before you start writing code.

---

## Checkpoints

### Checkpoint 1 — Scaffold
Claude Code sets up:
- `npm create astro@latest .` with Empty template, TypeScript strict
- Add Tailwind: `npx astro add tailwind`
- Add essential dev deps: `@astrojs/sitemap`, `@fontsource/inter`
- `.gitignore` with `.env`, `.vercel/`, `node_modules/`, `dist/`, `~/ria-image-staging/`
- Initial commit, push to `main` on your repo
- Vercel link: `vercel` CLI → connect to repo → first deploy
- Verify the preview URL loads a blank "Welcome to Astro" page

**STOP → user confirms the preview URL works and the repo has first commit.**

### Checkpoint 2 — Design system in code
- Configure `tailwind.config.mjs` with brand tokens from `brand-brief.md`:
  - Colours: `brand-green`, `brand-green-hover`, `brand-blue`, `brand-blue-hover`, `accent-lime`, text, surface, border
  - Fonts: Inter via `@fontsource/inter`
  - Type scale matching `brand-brief.md`
- `src/styles/global.css` with Tailwind base + CSS custom props mirroring the config
- Build a `/design-system` dev route showing swatches, type scale, buttons, cards — guarded by `import.meta.env.DEV` so it won't ship

**STOP → user reviews `/design-system` on preview URL.**

### Checkpoint 3 — Content collections
- `src/content/config.ts` with Astro content collections
- `products` collection: Zod schema matching `product-schema.md`, loader merges `products.json` + `product-copy.md` at build
- `categories` collection: from `taxonomy.md`
- `src/lib/taxonomy.ts` — single source for filter groups, Lucide icon names, show_filters flags
- `src/lib/whatsapp.ts` — deep-link templating helper
- Validate: `getCollection('products')` returns 93 products with no Zod errors

**STOP → user approves schema, confirms all 93 products load.**

### Checkpoint 4 — Base layout + global components
- `src/layouts/Base.astro` — HTML shell, meta, Inter load, Tailwind base
- `src/components/Header.astro` — logo, nav, desktop WhatsApp CTA, mobile hamburger + sticky WhatsApp icon
- `src/components/Footer.astro` — logo, category links, company links, WhatsApp QR + phone block (QR images from `public/images/qr/`)
- `src/components/WhatsAppButton.astro` — reusable, takes product prop for message templating
- `src/components/CategoryIcon.astro` — renders Lucide SVG from taxonomy icon name in brand-green

**STOP → user tests header, footer, WhatsApp links from a phone.**

### Checkpoint 5 — Product Detail dynamic page
- `src/pages/product/[id].astro` with `getStaticPaths` from the products collection
- Breadcrumbs, hero (gallery + copy), highlights, specs table, features, "Good to know" (hides when `notes` is empty — Phase 6 fills it), related products, bottom CTA
- Images from `public/images/products/{id}/`, loop in order
- Matches Phase 4 Product Detail mockup

**STOP → user spot-checks 5+ products across categories.**

### Checkpoint 6 — Category dynamic page + filter UI
- `src/pages/category/[slug].astro`
- Server-rendered grid for the category's products
- Client-side filter chips (vanilla JS or an Astro island) — Water Type / Install Type / Best For / Water Source
- `show_filters: false` categories render without the filter bar
- Empty state with WhatsApp CTA when no results

**STOP → user tests filters on every category on a phone.**

### Checkpoint 7 — Static pages
Build in order, approval after each:
- `src/pages/index.astro` — Home (hero, category tiles, Why RIA, Popular Picks, contact strip)
- `src/pages/products.astro` — all 93 with 5-group filter bar
- `src/pages/about.astro` — company story (from `page-specs.md` placeholder draft), what we sell strip, service area
- `src/pages/contact.astro` — two WhatsApp QR blocks, phone block, helper block

**STOP after each page.**

### Checkpoint 8 — SEO + polish
- `<title>` + meta description per page from `page-specs.md`
- Open Graph tags
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt`
- Favicon from logo
- Alt text on every product image (auto from product name)
- Mobile Lighthouse ≥90 across all four scores

**STOP → user runs Lighthouse, approves scores.**

### Checkpoint 9 — Mobile QA on real device
Walk every page template on a real phone. Issues logged to `build-fixes.md` (new file in repo root).

**STOP → user signs off.**

### Checkpoint 10 — Ready-to-publish handoff
- Delete or guard dev-only routes (`/design-system`)
- Final commit, push, verify Vercel preview is green
- Produce summary: preview URL, repo link, `build-fixes.md`, confirmation that `notes` field is wired and awaiting Phase 6

**STOP → user opens Phase 6 chat.**

---

## Outputs
- GitHub private repo with full source
- Vercel preview URL
- `build-fixes.md` committed to repo

## Handoff to Phase 6
Phase 6 writes `notes`, edits `products.json`, commits, pushes (Vercel auto-deploys), runs the launch checklist, points the production domain at Vercel.

---

## Tips for working with Claude Code on this phase

- **Keep sessions scoped per checkpoint.** When a checkpoint ends, exit the session (`/exit`) and start a fresh one for the next. Smaller context windows = sharper focus. Claude Code's `CLAUDE.md` is reloaded automatically, so you don't lose project context.
- **Use `/clear` sparingly within a checkpoint** if context gets noisy, but prefer `/exit` + new session between checkpoints.
- **Review diffs before accepting.** Claude Code shows diffs for every edit — read them, don't rubber-stamp.
- **If it goes off-track, interrupt.** Ctrl+C stops a tool call; type a correction. Don't let bad code pile up.
- **Push after every green checkpoint** so Vercel builds a known-good preview you can share.
- **If you want to see progress visually,** keep the Vercel preview URL open in a browser tab and refresh after each push.
