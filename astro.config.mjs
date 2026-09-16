import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://azharmaruf.com',
  integrations: [sitemap()],
  output: 'static'
});
