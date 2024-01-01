import { defineConfig } from "cypress";


export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.ts",
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on, config);
    },
    "screenshotOnRunFailure": true,
    "screenshotsFolder": "cypress/screenshots",
  },
  
});
