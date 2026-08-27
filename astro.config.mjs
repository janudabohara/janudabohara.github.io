import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://janudabohara.github.io',
  output: 'static',
  integrations: [react(), tailwind(), sitemap()],
});
