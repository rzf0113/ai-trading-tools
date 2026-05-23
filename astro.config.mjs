import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://rzf0113.github.io',
  base: '/ai-trading-tools',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
