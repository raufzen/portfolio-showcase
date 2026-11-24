import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGithubPages ? 'https://raufzen.github.io' : 'https://raufzen-showcase.netlify.app',
  base: isGithubPages ? '/portfolio-showcase' : '/',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })]
});
