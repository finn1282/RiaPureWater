// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Placeholder until the production domain is pointed at Vercel (Phase 6). Set SITE_URL to override.
const site = process.env.SITE_URL ?? 'https://ria-pure-water.vercel.app';

export default defineConfig({
  site,
  integrations: [
    sitemap({
      // Review-only pages are never meant to be indexed
      filter: (page) => !/\/(design-system|content-check)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
