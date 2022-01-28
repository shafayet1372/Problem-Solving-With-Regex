/* How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4 */

function countVowels(str) {
	return str.match(/[aeiou]/gi).length
}

console.log(countVowels('Palm'))