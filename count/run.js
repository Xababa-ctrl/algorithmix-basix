// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let word = args[0];
let letter2 = args[1];
let output = 0;
for (const letter of word) {
	if (letter2 === letter){
		output += 1;}
}

// Do not change:
console.log(output);
