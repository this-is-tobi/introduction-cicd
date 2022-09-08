import { defineConfig } from 'vite'

export default defineConfig(mode => {
  return {
    server: {
      host: mode === 'production' ? '127.0.0.1' : '0.0.0.0',
      port: 8080
    },
    test: {
      globals: true,
      // environment: 'jsdom',
      watch: false,
    },
  }
})
