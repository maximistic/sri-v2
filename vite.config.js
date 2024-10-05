import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sri-Portfolio2/', // GitHub Pages repo name
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html',
      },
      external: ['@react-three/fiber', '@react-three/drei'], // Externalize both modules
    },
  },
  plugins: [react()],
});
