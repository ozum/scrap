import { Project, Script, ScriptKit } from "@fortibase/scrap2";

const script: Script = function script(project: Project, args: Array<any>, s: ScriptKit) {
  const subScript = args.includes("--bundle") ? "rollup" : project.isTypeScript ? "tsc" : "babel";
  return s.executeSubScriptSync(subScript, args);
};

export { script };
