import { Command, flags } from "@oclif/command";
import Intermodular from "intermodular";
import { BIN } from "../utils";
import uninstall from "../uninstall";

export default class Uninstall extends Command {
  public static description = "Uninstall module project";

  public static examples = [
    `$ ${BIN} uninstall
hello world from ./src/hello.ts!
`,
  ];

  public static flags = {
    help: flags.help({ char: "h" }),
  };

  // eslint-disable-next-line class-methods-use-this
  public async run(): Promise<void> {
    // eslint-disable-next-line no-shadow
    // const { args, flags } = this.parse(Uninstall);
    uninstall(new Intermodular({ overwrite: true }), { uninstallPackages: true });
  }
}
