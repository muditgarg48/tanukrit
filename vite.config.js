import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      webp: {
        quality: 75,
      },
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-ui': ['framer-motion', 'lucide-react'],
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
  },
})