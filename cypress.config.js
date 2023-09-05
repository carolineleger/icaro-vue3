const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pxiqxh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
