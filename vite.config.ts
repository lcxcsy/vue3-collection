import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  css: {
    // global styles
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  server: {
    port: 8080
  }
})
