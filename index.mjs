import { printToFile } from "./printToFile.mjs"

const p = 5;

let s = "";

// Read up on node endline for different filesystems

for(let i=0; i<p; i++) {
	s += i + " buckets of fish!" + node.endline;
}

printToFile(s);
