import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shield-web-app/',
  build: {
    outDir: 'docs',     // <-- build goes directly to docs/
  },
})
