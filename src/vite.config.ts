import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { djangoVitePlugin } from 'django-vite-plugin'


// https://vite.dev/config/
export default defineConfig({
  build: {
    target: [
      'es2020',
      'chrome70',
    ]
  },
  plugins: [
    vue(),
    djangoVitePlugin({
      input: [
        'c3ds/static/css/base.scss',
        'core/ts/main.ts',
        'core/ts/clock.ts',
        'core/ts/schedule.ts',
        'core/ts/backdoor.ts',
      ],
    })
  ],
  server: {
    origin: 'http://127.0.0.1:5173',
  }
})
