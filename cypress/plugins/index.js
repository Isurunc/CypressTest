const { initPlugin } = require('cypress-plugin-snapshots/plugin');
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  initPlugin(on, config);
  // add other plugins/tasks such as code coverage here
};
