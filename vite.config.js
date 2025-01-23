import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.cwbsolutions.net', // Replace with your actual site URL
    }),
  ],
  base: '/', // Base path for your project
});
