import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ai-trading-tools.pages.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
