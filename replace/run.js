// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
word = args[0];
prevletter = args[1];
newletter = args[2];
let output = '';
for (const letter of word) {
	if (letter === prevletter){
		output += newletter;}
		else{
		output += letter;
	}
}
// Do not change:
console.log(output);
