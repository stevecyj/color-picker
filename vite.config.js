import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
import ElementPlus from 'unplugin-element-plus/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), svgLoader(), ElementPlus()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    // environment: 'edge-runtime',
    environment: 'happy-dom',
    // environment: 'jsdom',
    server: {
      deps: {
        // 添加这个配置解决：TypeError: Unknown file extension ".css" 错误
        inline: ['element-plus'],
      },
    },
  },
})
