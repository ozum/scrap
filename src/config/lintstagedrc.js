const project = require("../project");

const scripts = project.resolveScriptsBin();

module.exports = {
  concurrent: false,
  linters: {
    // ".all-contributorsrc": [`${kcdScripts} contributors generate`, "git add README.md"],
    "**/*.+(js|json|less|css|ts|md)": [
      project.isOptedOut("autoformat", null, `${scripts} format`),
      `${scripts} lint`,
      `${scripts} test --findRelatedTests --passWithNoTests`,
      project.isOptedOut("autoformat", null, "git add"),
    ].filter(Boolean),
  },
};
