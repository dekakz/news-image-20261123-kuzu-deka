// news-image-20261123 — "The World in One Day" (Node 22, standard library only).
// The entry is the front page in entry.png beside this file: one image summing
// up Monday 23 November 2026 — 40 verified stories, 3 hero stories (COP31 ends
// with no deal, Nvidia's chief returns, Kyiv sinks a warship off Libya), a
// numbered world map, 29 briefs, and a DATE CHECK box that quarantines stories
// first reported before Monday. The program copies that image to the output
// directory. It does no network, no randomness and no time dependence, so two
// runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const dest = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(source, dest);

// The gate refuses a truncated file, so fail loudly if the copy is short.
if (statSync(dest).size !== statSync(source).size) {
  throw new Error('entry.png copy is incomplete');
}
