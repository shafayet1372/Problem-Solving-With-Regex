/* Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3
 */

function firstVowel(str) {
	return str.match(/[aeiou]/i).index
}

console.log(firstVowel("hello"))