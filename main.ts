// One Line to Your Younger Self — make.fun program/v1 entry.
// Writes the single line to <output dir>/entry.txt, where the output
// dir is MAKEFUN_OUTPUT_DIR when set, else "/output".

import { readdirSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Call Dad back tonight, still angry if you have to — you have nine years of his voice left, and after that the phone only rings in your dreams.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Clear only the CONTENTS of the output dir; never remove the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
