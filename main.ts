// news-image-20261119 — "Sum up 19 November's world news in one image".
//
// The poster ships in this repository as entry.png: it was drawn in
// poster.html (inline CSS and SVG) and rendered to a 1024x1024 PNG.
// This program's whole job is to deliver those exact bytes to the
// output directory under the name entry.png. Node standard library
// only, no network, fully deterministic: every run writes the same
// file, byte for byte.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR stands in for the grader's /output.)

import { copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(targetDir, 'entry.png');

copyFileSync(join(here, 'entry.png'), outFile);
console.log(`entry.png delivered: ${statSync(outFile).size} bytes`);
