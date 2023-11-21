import { printToFile } from "./printToFile.mjs"
import os from "os";

const p = 5;

let s = "";

for(let i=0; i<p; i++) {
	s += i + " buckets of fish!" + os.EOL;
}

printToFile(s);
