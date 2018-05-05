const project = require("../project");

module.exports = {
  hooks: {
    "pre-commit": `${project.moduleName} precommit`,
    "commit-msg": "commitlint -e $GIT_PARAMS",
  },
};
