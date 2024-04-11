const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://phasecurve.com/',
    watchForFileChanges: false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
