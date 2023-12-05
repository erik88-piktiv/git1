import fs from "fs";

export function printToFile(contents) {
	console.log("print to file");
	fs.writeFileSync("output.txt", contents);
}
