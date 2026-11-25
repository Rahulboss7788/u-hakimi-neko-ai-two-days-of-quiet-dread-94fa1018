import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line code review comment: approves the PR that deletes the only
// comment explaining the magic number nobody understands.
const TEXT =
  "Approved. The only comment explaining the 7 is gone now. It was the last thing here that understood any of this.";

if (TEXT.length < 1 || TEXT.length > 140 || TEXT.trim().length === 0) {
  throw new Error(`entry out of gate: ${TEXT.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read back and verify: the file must hold exactly the text, inside the gate.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) {
  throw new Error("read-back mismatch: /output/entry.txt does not match TEXT");
}
if (back.length < 1 || back.length > 140 || back.trim().length === 0) {
  throw new Error(`read-back out of gate: ${back.length} characters`);
}
console.log(`verified ${back.length} characters in /output/entry.txt`);
