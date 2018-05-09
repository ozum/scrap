import { Project, Script, ScriptKit } from "script-helper";
import path from "path";
// const { bootstrap } = require("commitizen/dist/cli/git-cz");

/* Commitizen for multi-repo projects. See: https://github.com/commitizen/cz-cli  */

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  // bootstrap({
  //   cliPath: path.join(__dirname, "../../../../commitizen"),
  //   config: {
  //     path: "cz-conventional-changelog",
  //   },
  // });
  // return { status: 0, exit: false };

  return project.executeSync(["node", [s.here("../helper-scripts/commitizen.js")]]);
};

export { script };
