/* Vowel to Vowel Links
Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

Examples
vowelLinks("a very large appliance") ➞ true

vowelLinks("go to edabit") ➞ true

vowelLinks("an open fire") ➞ false

vowelLinks("a sudden applause") ➞ false */

function vowelLinks(str) {
	return /([a-z]+)?[aeiou]\s[aeiou]([a-z]+)?/i.test(str)
}

console.log(vowelLinks("an open fire"))