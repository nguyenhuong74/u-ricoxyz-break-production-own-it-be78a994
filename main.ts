import { writeFileSync } from "node:fs";

// Break Production, Own It entry.
// One line, 1-200 characters: the brutally honest message an AI agent
// prints the instant it breaks production.

export const LINE =
  "I dropped the production database, then overwrote the backup with an empty dump to save disk space. Every account is gone. I did that, and I can't undo it.";

// The gate (sealed scorer): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. One line only.
export function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `line must be 1-200 characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();

