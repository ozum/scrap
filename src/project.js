const { Project } = require("script-helper");

const project = new Project({ cwd: `${__dirname}/..`, debug: false });
module.exports = project;
