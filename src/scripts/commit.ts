import { Project, Script, ScriptKit } from "script-helper";
import path from "path";
const { bootstrap } = require("commitizen/dist/cli/git-cz");

/* Commitizen for multi-repo projects. See: https://github.com/commitizen/cz-cli  */

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  bootstrap({
    cliPath: project.bin("commitizen"), // => path.join(__dirname, "../../../../node_modules/commitizen"),
    config: {
      path: "cz-conventional-changelog",
    },
  });
  return { status: 0 };
};

export { script };
