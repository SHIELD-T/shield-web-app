import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 Replace <repo-name> with your actual repository name
  base: '/shield-web-app/',
})
