import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spam-email-detector/', // 👈 change to your repo name
  plugins: [react()]
});