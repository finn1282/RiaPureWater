# Build fixes

Checkpoint 9 log. Walk each page type on a real phone and write down anything that looks or behaves wrong. Claude fixes the list after sign-off.

**Test on:** Android + iPhone if possible. Note the device and browser.
**Live site:** https://ria-pure-water.vercel.app (public; the long per-deployment links ask for a Vercel login)

## Checklist

Tick each item when it works. If it doesn't, add a row to the log below.

### All pages
- [ ] Header logo shows and links Home
- [ ] WhatsApp icon button in the header opens WhatsApp with the message filled in
- [ ] Hamburger menu opens, lists the 6 categories, closes with the X
- [ ] No sideways scrolling on any page
- [ ] Footer: both phone numbers dial, QR shows, WhatsApp button works

### Home (`/`)
- [ ] Hero text and both buttons readable and tappable
- [ ] 6 category tiles open the right category
- [ ] Popular picks scrolls sideways; first card has a left margin
- [ ] "Or call 013-368 1349" starts a call

### Category (`/category/home-water-dispensers`, then the other 5)
- [ ] Filters button opens the bottom sheet; chips toggle; "Show N results" closes it
- [ ] Applied tags show and the × removes one; "Clear all" works
- [ ] A combination with no results shows the empty state with a WhatsApp button
- [ ] Filters & Cartridges and Parts & Fittings show no filter button
- [ ] Refreshing keeps the filters (they are in the address)

### All products (`/products`)
- [ ] Category pills scroll sideways
- [ ] Category filter group appears first in the sheet
- [ ] Filters work across all 93 products

### Product detail (`/product/qk-4zi`, plus 4+ others)
- [ ] Sticky "Enquire about {MODEL}" bar stays at the bottom and doesn't cover the footer
- [ ] WhatsApp message names the product and model
- [ ] Specification rows are readable (labels above values)
- [ ] Related products scroll sideways
- [ ] Breadcrumb links work

### About (`/about`) and Contact (`/contact`)
- [ ] Both QR codes scan and open the matching number (013-368 1349 and 012-657 6870)
- [ ] "Open WhatsApp" buttons open the right line
- [ ] Both phone numbers dial

## Log

| # | Page | Device / browser | What's wrong | Status |
|---|------|------------------|--------------|--------|
| | | | | |

## Known items from the build (not phone findings)

| # | Item | Notes | Status |
|---|------|-------|--------|
| K1 | No product photos | Every card and page shows "Photo coming soon". Add `public/images/products/{id}/01.jpg` (and 02, 03…) and rebuild. | Waiting on photos |
| K2 | No hero photo on Home | Add `public/images/hero.jpg` (4:3). Hero is text only until then. | Waiting on photo |
| K3 | Site URL is the Vercel address | Canonical links, share cards and sitemap use `ria-pure-water.vercel.app`. Set `SITE_URL` in Vercel when the real domain is ready. | Phase 6 |
| K4 | Review-only pages are live | `/design-system` and `/content-check` are served because `SHOW_DESIGN_SYSTEM=1` is set in Vercel. Removed at Checkpoint 10. | Checkpoint 10 |
| K5 | Logo file size | `logo-primary-trimmed.svg` is 104 KB (about 38 KB compressed). Lighthouse scores are fine; shrink only if needed. | Watch |
| K6 | WhatsApp icon | Uses the glyph from the mockups, which reads as a plain chat bubble at small sizes. | Your call |
| K7 | "Who we are" text | Placeholder from the page spec. Replace with your own wording. | Waiting on you |
| K8 | Business hours and address | Left out of Contact for launch, as specified. | Post-launch |
| K9 | `notes` field empty | "Good to know" stays hidden on every product until Phase 6 fills `notes`. | Phase 6 |
| K10 | Site is already public | `ria-pure-water.vercel.app` loads without a login and `robots.txt` allows search engines, so the unfinished site can be indexed. Decide before sharing the link: leave as is, or switch on Vercel protection / block crawlers until launch. | Your call |
