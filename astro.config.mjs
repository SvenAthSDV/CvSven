import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://SvenAthSDV>github.io',
  base: 'CvSven',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
