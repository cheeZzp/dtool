import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  plugins: [vue()],
  css:{
    preprocessorOptions: {
      less: {
        additionalData: `
        @import "./src/style/global.less";
        `,
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': "#1BD1A1"
        }
      },

    }
  },
  server: {
    proxy: {
      "^/dev/.*": {
        target: "http://10.188.40.15:8091/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev/, "")
      }
    }
  },
  build: {
    outDir: "dtool-ui"
  }
})
