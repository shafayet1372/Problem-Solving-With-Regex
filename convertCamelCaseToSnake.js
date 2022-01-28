/* Convert camelCase to snake_case
Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

Examples
camelToSnake("magicCarrots") ➞ "magic_carrots"

camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"

camelToSnake("thatsGreat") ➞ "thats_great" */

function camelToSnake(str) {
	return str.split(" ").map(x => {
		if (x.toLowerCase() == x) {
			return x
		}
		let charsIndex = x.match(/(?<=[\w])[A-Z]/g).map(y => x.indexOf(y))
		return x.split('').map((y, i) => charsIndex.find(x => x == i) ? `_${y.toLowerCase()}` : y).join("")

	}).join(" ")
}

console.log(camelToSnake("th1sSh0uldB3FineT00"))

