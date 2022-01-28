/* You are given an array with random words but your program doesn't accept words that begin with the capital letter "C".
 Remove the unaccepted words and return the new array.

Examples
accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]

accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]

accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
Notes
Use a RegEx boundary assertion in your function. */

function acceptedWords(arr) {
	return  arr.filter(x=>!/^C/.test(x))
}

console.log(acceptedWords(["Ducks", "Bears",  "Cats"]))