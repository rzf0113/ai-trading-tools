import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ai-trading-tools.pages.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
