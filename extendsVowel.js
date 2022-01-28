/* Extend the Vowels
Create a function that takes a word and extends all vowels by a number num.

Examples
extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"

extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"

extendVowels("Extend", 0) ➞ "Extend"
Notes
Return "invalid" if num is not an integer. */

function extendVowels(word, num) {
	if(!/^\d+$/.test(num)){
		return 'invalid'
	}
	return word.split("").map(x=>/[aeiou]/i.test(x)?`${x}${x.repeat(num)}`:x).join("")
}

console.log(extendVowels("Hello", 5))