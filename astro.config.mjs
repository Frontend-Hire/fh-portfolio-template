// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // TODO: Set your site URL https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
  // TODO: Get this from the site-config
  site: "https://portfolio.frontendhire.com/",
  integrations: [tailwind(), sitemap(), preact()],
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
});
