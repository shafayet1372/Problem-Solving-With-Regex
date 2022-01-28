/* Double Letters
Create a function that takes a word and returns true if the word has two consecutive identical letters.

Examples
doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false */

function doubleLetters(word) {
	return (/(\w)\1/.test(word))
}

console.log(doubleLetters('loop'))