import { exit } from "process";
import { Command } from "commander";
import { gruLex, GruToken } from "./grulex";

const VERSION_NUMBER = "0.0.1";

const parseGru: (gruCode: string) => Array<GruToken> = (gruCode: string) => {
  let tsCode = gruLex(gruCode);
  return tsCode;
};

const fs = require("fs-extra");
const program = new Command().name("GRU");

program
  .description("Tryna parse Gru?")
  .argument("[sourceFile]", "The source .gru file")
  .option("--help")
  .version(VERSION_NUMBER, "-v, --version", "Display the version number")
  .parse(process.argv);

program.parse();

const args = program.args;
if (!args[0]) {
  console.log("ERROR: Please provide input file");
  process.exit(1);
}
const sourceCode: string = fs.readFileSync(args[0]).toString();
const parsedCode: Array<GruToken> = parseGru(sourceCode);
process.stdout.write(
  parsedCode.reduce(
    (prev: string, current: GruToken) => `${prev}\n${JSON.stringify(current)}`,
    ""
  )
);

exit(0);
