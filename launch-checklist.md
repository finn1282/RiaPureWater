# RIA Pure Water — Launch Checklist

Phase 6, Checkpoint 5. Checked 17 Oct 2026 against commit `3b9c2a8` (notes live on `ria-pure-water.vercel.app`).

**How it was checked:** an automated pass over the production build (all 104 pages), a headless browser at phone width (375px) on every page, and mobile Lighthouse on five key pages. Items marked **Phone** need a real phone and are for Zhen to tick.

## Checklist

| # | Item | Result | Notes |
|---|------|--------|-------|
| 1 | Every product has photo, bio, KSPs, specs, WhatsApp CTA | ⚠️ Accepted | Bio, highlights, specs, features and WhatsApp CTA present on all 93. **No product photos** yet — every product shows "Photo coming soon" (build-fixes K1). Zhen chose to launch without photos and add them later. |
| 2 | Notes render where written, block hides where not | ✅ | 31 pages show "Good to know", 62 hide it. Checked live on `mao-16-ab` and `ohc-500u`. |
| 3 | Category pages + filters work on every category | ✅ | 6 categories (18 + 4 + 21 + 8 + 19 + 23 = 93). Every chip tested on the 4 filtered categories and `/products` (52 chips): results update, toggling off restores the full list. Filters & Cartridges and Parts & Fittings have no filter bar, as specified. |
| 4 | WhatsApp deep-links (primary line, product name pre-filled) | ✅ | Every product page links to `wa.me/60133681349` with the product name and model in the message. Tested on a phone. |
| 5 | Phone `tel:` links | ✅ | Only `tel:+60133681349` and `tel:+60126576870` used. Tested on a phone. |
| 6 | WhatsApp QRs scan from a phone camera | ✅ | Both decode: `wa_qr_013.png` → `wa.link/iry3m9`, `wa_qr_012.png` → `wa.link/1h7qmg`. Scanned on a phone: both open the right number. |
| 7 | Page titles + meta descriptions on every page | ✅ | All 104 pages, no duplicate titles. |
| 8 | Open Graph tags render (test paste in WhatsApp) | ✅ | `og:title`, `og:description`, `og:image`, `og:url` on every page, image URL absolute. Preview checked in WhatsApp. |
| 9 | Favicon, site title | ✅ | Favicon, 192px icon and Apple touch icon linked on every page. Titles end in "\| RIA Pure Water". |
| 10 | Alt text on every product image | ✅ | Every `<img>` has alt text. Re-check once photos are added. |
| 11 | Mobile Lighthouse ≥90 | ✅ | Home 100 / 96, Product (`jx-1s`) 99 / 96, All products 99 / 94, Contact 99 / 96, Category 100 / 94 (Performance / Accessibility). Best Practices and SEO 100 on all. Measured on a local copy of the build; re-run on the live domain after Checkpoint 6. |
| 12 | `sitemap.xml` accessible | ✅ | Astro publishes `/sitemap-index.xml` (→ `/sitemap-0.xml`, 103 URLs, 404 page excluded). `robots.txt` points to it. There is no `/sitemap.xml` file; search engines find the index through `robots.txt`. |
| 13 | `robots.txt` allows indexing | ✅ | `Allow: /`. |
| 14 | No console errors on any page | ✅ | 103 pages at 375px: no console errors, no failed requests, no sideways scroll. |
| 15 | Dev-only routes removed or guarded | ✅ | `/design-system` and `/content-check` are not in the build. |
| 16 | No stray `TODO` / `FIXME` in rendered copy | ✅ | None. Also no "lorem", "undefined" or "NaN". |

## Decisions at sign-off

1. **Product photos (K1):** launch without photos; add them later by dropping JPEGs into `public/images/products/{id}/` and pushing.
2. **Production domain (K3 / Checkpoint 6):** deferred. The site runs on `ria-pure-water.vercel.app` for now. When the domain is ready: add it in Vercel → Settings → Domains, set the DNS records Vercel shows there, set `SITE_URL` to the new address, redeploy, and re-run Lighthouse on the live domain.

## Not blocking (your call)

- **Home hero photo (K2).** Hero is text only until `public/images/hero.jpg` is added.
- **Colour contrast.** White text on the WhatsApp blue (`#3AA9E0`) is 2.6:1; the guideline is 4.5:1. The blue is locked in the brand brief, so it stays unless you want a darker shade. Footer headings (white at 70%) are 3.9:1.
- **"Who we are" text (K7)** is still the placeholder draft.
- **Business hours and address (K8)** stay hidden for launch, as planned.

## Sign-off

Signed off by Zhen on 17 Oct 2026. Phone checks (QR codes, WhatsApp links, call links, link preview) passed.
