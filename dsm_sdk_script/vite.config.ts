import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'demo',
      fileName: 'demo',
      formats: ['es'],
    }
  },
  define: {
    global: {},
    process: {
      env: {},
    },
  },
})
