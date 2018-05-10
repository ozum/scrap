import { Project, Script, ScriptKit } from "@fortibase/scrap2";
import path from "path";

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  // Commitizen for multi-repo projects. See: https://github.com/commitizen/cz-cli
  // Moved to helper script, because it uses process.argv and is passed incompatible argument from @fortibase/scrap2
  return project.executeSync(["node", [s.here("../helper-scripts/commitizen.js")]]);
};

export { script };
