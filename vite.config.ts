import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@icons': path.resolve(__dirname, './src/icons'),
      '@types': path.resolve(__dirname, './src/types/index.ts'),
      '@config': path.resolve(__dirname, './src/config/index.ts')
    }
  }
});
