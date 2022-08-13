import { exit } from "process";
import { goodPracticeComment, grumap, lineCommentPrefix } from "./config";
import { Command } from "commander";

const VERSION_NUMBER = "0.0.1";

const parseGru: (gruCode: string) => string = (gruCode: string) => {
  let tsCode = gruCode.replaceAll("finna", "function");

  for (let entry of grumap.entries()) {
    tsCode = tsCode.replaceAll(entry[1], entry[0]);
  }

  tsCode.split("\n").forEach((line, i) => {
    const commentIdx = line.indexOf(lineCommentPrefix);
    if (commentIdx < 0) return;

    if (!line.slice(commentIdx).includes(goodPracticeComment)) {
      console.log(
        `WARNING: Line: ${
          i + 1
        }. Every comment should contain ${goodPracticeComment}!`
      );
    }
  });

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
const parsedCode: string = parseGru(sourceCode);
process.stdout.write(parsedCode);

exit(0);
