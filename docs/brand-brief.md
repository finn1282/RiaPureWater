# RIA Pure Water — Brand Brief
 
Locked brand direction for the RIA Pure Water website build. Every later phase (products, taxonomy, sitemap, mockups, Wix build) references this file.
 
**Direction chosen:** Option A — Trust & Clarity (utility-first)
 
---
 
## 1. Logo
 
- Primary lockup: `Pure_water_Logo_Design.pdf` (square, use for site header, favicon source, social)
- Wide lockup: `RIA_signboard_8x3ft.pdf` (use where horizontal space allows — footer, letterhead)
- The "ria" mark + water droplet is the identity. The tagline "Pure Water for Every Home" appears on the logo itself and should not be duplicated as page copy near the logo.
---
 
## 2. Colour tokens
 
| Token | Hex | Where it goes |
|---|---|---|
| `--brand-green` | `#1F6F3A` | Primary buttons, active nav, H1/H2 headings, links, section dividers, footer background |
| `--brand-green-hover` | `#175A2E` | Button hover, link hover — one shade deeper |
| `--brand-blue` | `#3AA9E0` | WhatsApp CTA button (the most-used action), water-related icons, info callouts |
| `--brand-blue-hover` | `#2691CB` | WhatsApp button hover |
| `--accent-lime` | `#4CBD3A` | Sparingly — "New", "Popular", "In stock" tags; small badges only |
| `--text-primary` | `#2D3748` | Body copy, product descriptions |
| `--text-muted` | `#6B7280` | Captions, meta info, labels, form hints |
| `--surface` | `#F5F7F8` | Alt section backgrounds, card backgrounds on white pages |
| `--background` | `#FFFFFF` | Default page background |
| `--border` | `#E5E7EB` | Card borders, dividers, input borders |
 
**Colour rules**
- Green is for identity + primary action. Blue is for *the* action (WhatsApp CTA).
- One lime accent per screen maximum — treat it like a highlighter, not a colour.
- Never put green text on blue background or vice versa. Colour meets colour only through white space.
---
 
## 3. Typography
 
**Family:** Inter (Google Fonts, weights 400 / 500 / 600 / 700). One family, one less thing to worry about, ultra-readable on mobile.
 
### Type scale (mobile-first, sizes in px)
 
| Level | Size / Line-height | Weight | Use |
|---|---|---|---|
| H1 | 32 / 40 | 700 | Page title (Home hero, category name) |
| H2 | 24 / 32 | 700 | Section headings, product name on detail page |
| H3 | 20 / 28 | 600 | Sub-sections, card titles |
| H4 | 16 / 24 | 600 | Small headings, spec labels |
| Body-lg | 18 / 28 | 400 | Product intro paragraph, hero subhead |
| Body | 16 / 24 | 400 | Default body text |
| Body-sm | 14 / 20 | 400 | Captions, meta, form hints |
| Button | 16 / 24 | 600 | All CTAs — same size across the site |
| Overline | 12 / 16, +0.08em tracking | 600 uppercase | Category labels, breadcrumbs |
 
### Desktop scaling
- H1 → 44px
- H2 → 32px
- H3 → 24px
- Body stays 16px
---
 
## 4. Voice & tone
 
**Voice adjectives:** clear, practical, trustworthy, direct
 
### Tone by page
- **Home + category** — welcoming, brief
- **Product detail** — factual, specific, no fluff
- **WhatsApp CTA** — action-oriented, one line
### Do / Don't examples
 
**Product description**
- ✅ Do: "Hot and cold water on demand. Fits standard 5-gallon bottles. Uses about 90W in normal home use."
- ❌ Don't: "Experience the ultimate hydration solution with our revolutionary premium dispenser system!"
**WhatsApp CTA**
- ✅ Do: "Enquire on WhatsApp"
- ❌ Don't: "Click here to unlock exclusive pricing today!"
**Feature bullet**
- ✅ Do: "Child safety lock on hot water tap"
- ❌ Don't: "Advanced multi-layer child protection technology for your peace of mind"
**Rule of thumb** — if a sentence would embarrass you to read out loud to a customer, cut it.
 
---
 
## 5. Contact CTA
 
**Primary CTA text (locked, use everywhere):** **Enquire on WhatsApp**
 
**Secondary CTA (phone call fallback):** **Or call us** followed by the number
 
### Button styling
- Background: `--brand-blue` (`#3AA9E0`)
- Text: white
- Weight: 600, size 16px
- Padding: 12px 24px (mobile), 14px 28px (desktop)
- Border-radius: 8px
- Hover: `--brand-blue-hover` (`#2691CB`)
- Optional WhatsApp icon on the left of the text
### Placement rule
Every product page, category page, home, and footer must lead to the WhatsApp CTA. Every path leads to WhatsApp within 2 clicks. Customer journey end-to-end: 3 clicks max.
 
### WhatsApp deep-link format
```
https://wa.me/60XXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20[product]
```
`[product]` should be templated per product where possible.
 
---
 
## 6. Product photography
 
Zhen will extract from the catalogue PDFs first, then reshoot later. Guidelines for both stages:
 
### Now (extracting from catalogue)
- Prefer images already on white or near-white backgrounds — they drop into product cards cleanly
- If catalogue images have busy backgrounds, background-remove them (remove.bg or similar) before uploading
- Aim for consistent aspect ratio per product — square (1:1) works best for grid layouts
### Later (reshooting)
- **Background:** pure white or very light warm grey (`#F5F7F8` matches the site surface)
- **Lighting:** soft, diffused, from front-left. Avoid hard shadows. A window with a sheer curtain works.
- **Angle:** slight 3/4 view for dispensers so the tap area is visible, not dead-on
- **Framing:** product fills ~70% of frame, generous white space around it
- **Consistency matters more than perfection** — 20 photos in the same style beat 5 studio-quality photos mixed with 15 phone snaps
- **Scale reference (optional):** for large units, one photo with a person or standard object nearby helps buyers judge size
### Icons & illustrations
Use simple line icons in `--brand-green`. Lucide or Feather icon sets pair well with Inter.
 
---
 
## 7. Quick reference for later phases
 
- **Fonts to load in Wix:** Inter (400, 500, 600, 700)
- **Primary button colour:** `#1F6F3A`
- **WhatsApp button colour:** `#3AA9E0`
- **Body text colour:** `#2D3748`
- **Page background:** `#FFFFFF`
- **CTA text:** "Enquire on WhatsApp"
- **Voice check:** clear, practical, trustworthy, direct
 