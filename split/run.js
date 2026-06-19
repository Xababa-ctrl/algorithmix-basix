// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const text = args[0];
const delimeter = args[1];
let current = "";
const output = [];

for (let i =0; i <text.length; i++){
	if (text[i] === delimeter || text[i] === ";"){
		output.push(current);
		current ="";}
	else {
		current += text[i];
	}
}
output.push(current);


// Do not change:
console.log(output);
