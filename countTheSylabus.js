/* Count the Syllables
Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

Examples
countSyllables("Hehehehehehe") ➞ 6

countSyllables("bobobobobobobobo") ➞ 8

countSyllables("NANANA") ➞ 3 */

function countSyllables(str) {
	return str.match(/(\w{2})/ig).length
}

console.log(countSyllables('Hehehehehehe'))