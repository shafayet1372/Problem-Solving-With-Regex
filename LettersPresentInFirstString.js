/* Are Letters in the Second String Present in the First?
Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.

Examples
letterCheck(["trances", "nectar"]) ➞ true

letterCheck(["compadres", "DRAPES"]) ➞ true

letterCheck(["parses", "parsecs"]) ➞ false */

function letterCheck(arr) {
	return arr[1].split('').every(x=>arr[0].match(new RegExp(`${x}`,'gi')))
}
console.log(letterCheck(["trances", "nectar"]))