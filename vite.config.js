import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.src'),
      vue: path.resolve('./node_modules/vue')
    }
  },
  sertver: {
   watch: {
    usePolling: true
   } 
  },
  plugins: [vue()],
})
