import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'), // Alias for 'src' directory
      '@': path.resolve(__dirname, '.'), // Alias for root directory
    },
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
})
