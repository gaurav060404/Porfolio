import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          vendor: ['react', 'react-dom'],
          // Motion library (likely one of the largest)
          motion: ['motion'],
          // Three.js related (if you're using it)
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Other utilities
          utils: ['tailwind-merge', 'cobe', 'maath']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable code splitting
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion']
  }
})
