const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: 'e2e',
  fixturesFolder: false,
  screenshotsFolder: 'e2e/results/screenshots',
  videosFolder: 'e2e/results/videos',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'e2e/reporter.json',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://cloud.konghq.com/us',
    specPattern: 'e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'e2e/support/index.js',
  },
})
