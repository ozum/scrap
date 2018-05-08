require("source-map-support").install();

import { Project, replaceArgumentName, Executable, Script, ScriptKit } from "script-helper";
import fs from "fs-extra";
import path from "path";
import yargsParser from "yargs-parser";
import handlebars from "handlebars";

const preInstall: Script = function preInstall(project: Project, rawArgs: Array<any>, s: ScriptKit) {
  project.createDirSync(".git/hooks");
  return { status: 0 };
};

const init: Script = function init(project: Project, rawArgs: Array<any>, s: ScriptKit) {
  project.resetSync();
  const gitignoreFile = project.isCompiled ? "compiled" : "non-compiled";
  const forceTestScript = project.package.get("scripts.test") && project.package.get("scripts.test").match("no test specified");
  const scripts = {
    // FASTER Bash Only: "f() { P=$1; P=${P/src/lib}; P=${P/.ts/.js}; tsc-watch --onSuccess \"node -r source-map-support/register ${P}\"; }; f";
    // SLOWER Cross Compatible: "nodemon --watch src --exec ts-node --";
    // For BABEL, consider BABEL-WATCH fro faster scripts
    file: project.isTypeScript
      ? 'f() { P=$1; P=${P/src/lib}; P=${P/.ts/.js}; tsc-watch --onSuccess "node -r source-map-support/register ${P}"; }; f' // eslint-disable-line
      : "nodemon --exec babel-node --",

    // TS Watch için: "concurrently 'npm run build -- --watch' 'npm run test -- --watch' | awk '{gsub(/\\033c/,\"\") system(\"\")}1'" // Prevents tsc --watch clear.
    // After TypeScript 2.8: "concurrently 'npm run build -- --watch --preserveWatchOutput' 'npm run test -- --watch'"
    watch: project.isTypeScript
      ? "concurrently 'npm run build -- --watch' 'npm run test -- --watch' | awk '{gsub(/\\033c/,\"\") system(\"\")}1'"
      : "concurrently 'npm run build -- --watch' 'npm run test -- --watch",
    squash: "BRANCH=`git rev-parse --abbrev-ref HEAD` && git checkout master && git merge --squash $BRANCH && npm run commit",
    release: "git checkout master && git pull origin master && standard-version && git push --follow-tags origin master && npm publish",
    build: `moe-scripts build${project.isTypeScript ? "" : " --source-maps"}`,
  };

  project.package
    .set("scripts.file", scripts.file)
    .set("scripts.watch", scripts.watch)
    .set("scripts.build", scripts.build)
    .set("scripts.build:doc", "moe-scripts doc --no-cache")
    .set("scripts.test", "moe-scripts test", { force: forceTestScript })
    .set("scripts.test:update", "moe-scripts test --updateSnapshot")
    .set("scripts.lint", "moe-scripts lint")
    .set("scripts.format", "moe-scripts format")
    .set("scripts.validate", "moe-scripts validate")
    .set("scripts.commit", "moe-scripts commit")
    .set("scripts.prepublishOnly", "npm run build")
    .set("scripts.squash", scripts.squash)
    .set("scripts.release", scripts.release);

  // It is not necessary to create symlink of module directories using createModuleSymLink("tslint"), because npm installs modules as a flat list,
  // so they are directly in node_modules of project: @types/jest, @types/node, prettier, ts-jest, eslint, tslint

  project.writeFileSync(".env", "");

  project.writeFileSync(".env.sample", "# Description\n# VAR='value'\n");
  project.createSymLinkSync(`lib/config/gitignore/${gitignoreFile}`, ".gitignore");
  project.createSymLinkSync("lib/config/gitattributes", ".gitattributes");
  project.copyFileSync("lib/config/changelog.md", "CHANGELOG.md");
  project.copyFileSync("lib/config/editorconfig", ".editorconfig");
  project.writeFileSync("LICENSE", "");
  project.writeFileSync(
    "README.hbs",
    handlebars.compile(fs.readFileSync(project.fromConfigDir("readme.hbs"), { encoding: "utf8" }))(project.package.data),
  );
  project.writeFileSync(".prettierrc.js", `module.exports = require("moe-scripts/prettier");\n`);
  project.createSymLinkSync(`lib/config/prettierignore/${project.isCompiled ? "compiled" : "non-compiled"}`, ".prettierignore");
  project.writeFileSync(".huskyrc.js", `module.exports = require("moe-scripts/husky");\n`);
  project.writeFileSync("commitlint.config.js", `module.exports = require("moe-scripts/commitlint");\n`);

  // lint
  // Create node_modules/module symlink for IDE support and config file if not exists.
  if (project.isTypeScript) {
    project.writeFileSync("tslint.json", { extends: `moe-scripts/tslint.json` }, { serialize: true, format: "json" });
  } else {
    project.writeFileSync(".eslintrc", { extends: `./node_modules/moe-scripts/eslint.js` }, { serialize: true, format: "json" });
  }

  // compiler
  if (project.isTypeScript) {
    project.createSymLinkSync("lib/config/tsconfig/backend.json", "tsconfig.json");
    project.createSymLinkSync("lib/config/tsconfig/backend-test.json", "tsconfig-test.json");
  }

  return { status: 0 };
};

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  return process.env.npm_lifecycle_event === "preinstall" ? preInstall(project, args, s) : init(project, args, s);
};

export { script };
