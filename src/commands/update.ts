import { Command, flags } from "@oclif/command";
import Intermodular from "intermodular";
import { BIN } from "../utils";
import update from "../update";

export default class Update extends Command {
  public static description = "Updates project by adding configuration files and updating 'package.json' file.";

  public static examples = [
    `$ ${BIN} update
hello world from ./src/hello.ts!
`,
  ];

  public static flags = {
    help: flags.help({ char: "h" }),
    addDependencies: flags.boolean({ char: "d", description: "Add dependencies to 'package.json'" }),
    features: flags.string({ char: "f", description: "(CSV) Features to add" }),
  };

  // public static args = [{ name: "file" }];

  public async run(): Promise<void> {
    // eslint-disable-next-line no-shadow
    const { flags } = this.parse(Update);
    update(new Intermodular({ overwrite: true }), {
      addDependencies: flags.addDependencies,
      features: flags.features ? flags.features.split(",") : undefined,
    });
  }
}
