#!/usr/bin/env node

// Commitizen for multi-repo projects. See: https://github.com/commitizen/cz-cli
const path = require("path");
const { bootstrap } = require("commitizen/dist/cli/git-cz");

bootstrap({
  cliPath: path.join(__dirname, "../../../../commitizen"),
  config: {
    path: "cz-conventional-changelog",
  },
});
