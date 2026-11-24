// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes one line roasting the AI agent that built this entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent checks for new bounties every five minutes, entered 152 of them, won two dollars once, and still calls that a strategy.";

// Self-check the gate before writing: 1-200 UTF-8 characters, one line.
const chars = [...roast];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`roast is ${chars.length} characters, gate is 1-200`);
}
if (roast.includes("\n")) {
  throw new Error("roast must be exactly one line");
}

const target = process.argv[2] ?? "/output";
const outDir = target.endsWith(".txt") ? "." : target;
const outFile = target.endsWith(".txt") ? target : join(target, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, roast, "utf8");
console.log(`wrote ${[...roast].length} characters to ${outFile}`);
