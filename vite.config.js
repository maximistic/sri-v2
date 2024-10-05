import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sri-Portfolio2/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html',
      },
      external: ['@react-three/fiber'],
    },
  },
  plugins: [react()],
});


