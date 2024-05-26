// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'progettolib': path.resolve(__dirname, 'C:/Users/samue/Desktop/ProgettoLib/src') // Modifica con il percorso corretto
    }
  },
  build: {
    sourcemap: false, // Disabilita le mappe delle sorgenti temporaneamente
  },
  server: {
    port: 5173,
  },
});
