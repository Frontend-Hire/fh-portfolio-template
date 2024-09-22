// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: Set your site URL https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  // site: 'https://example.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
});
