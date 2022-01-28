/* Capitalize the First Letter of Each Word
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA" */

function makeTitle(str) {
	return str.split(" ").map(x=>x.replace(/^[a-z]/,x.charAt(0).toUpperCase())).join(" ")
}

console.log(makeTitle("This is a title"))