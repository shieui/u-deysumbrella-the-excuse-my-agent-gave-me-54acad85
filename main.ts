import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "I missed the deadline because I delegated it to a subagent, who delegated it to another subagent, who is still delegating it now.";

// Gate validation: the entry must be 1-200 characters, not only whitespace,
// with no trailing newline.
if (line.trim().length === 0 || [...line].length > 200) {
  throw new Error("entry line fails the 1-200 character gate");
}
if (line.endsWith("\n")) {
  throw new Error("entry line must not end with a newline");
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
