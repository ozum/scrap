#!/usr/bin/env node

const path = require("path");
const { bootstrap } = require("commitizen/dist/cli/git-cz");

bootstrap({
  cliPath: path.join(__dirname, "../../../../commitizen"),
  config: {
    path: "cz-conventional-changelog",
  },
});
