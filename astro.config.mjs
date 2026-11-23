import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://raufzen-showcase.vercel.app',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })]
});
