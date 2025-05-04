import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/spam-email-detector/', // 👈 MUST MATCH your GitHub repo name exactly
  plugins: [react()]
})