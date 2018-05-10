import { Project, Script, ScriptKit } from "@fortibase/scrap2";

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  project.resetSync();
  return { status: 0 };
};

export { script };
