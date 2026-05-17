/**
 * xp.css uses progress pseudo-elements (e.g. ::-moz-progress-bar:not([value]))
 * that Turbopack's Lightning CSS parser rejects. This script emits a trimmed bundle.
 */
import fs from "node:fs";
import path from "node:path";

const src = path.join(process.cwd(), "node_modules/xp.css/dist/XP.css");
const out = path.join(process.cwd(), "styles/xp-compat.css");

const raw = fs.readFileSync(src, "utf8");

const blocked = [
  "::-moz-progress-bar",
  "::-webkit-progress-bar",
  "::-webkit-progress-value",
  "::-webkit-progress-inner-element",
];

const rules = raw.split("}").filter(Boolean);
const kept = rules.filter((chunk) => !blocked.some((token) => chunk.includes(token)));

let css = kept.map((chunk) => `${chunk}}`).join("");
css = css.replace(/@font-face\{[^}]+\}/g, ""); // fonts use broken relative paths in our bundle

fs.writeFileSync(out, `/* xp.css compat — auto-generated, do not edit */\n${css}\n`);
console.log(`Wrote ${out} (${(css.length / 1024).toFixed(1)} KB)`);
