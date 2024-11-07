import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CWB-Solutions-Pte-Ltd/', // Add this line
});


