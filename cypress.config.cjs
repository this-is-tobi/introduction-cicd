const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'src/**/*.e2e.js',
    supportFile: false,
    screenshotsFolder: 'screenshots',
    video: false,
    numTestsKeptInMemory: 1
  },
})
