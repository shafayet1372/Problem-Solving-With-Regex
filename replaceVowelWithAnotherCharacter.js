/* Replace Vowel with Another Character
Create a function that takes a string and replaces the vowels with another character.

a = 1
e = 2
i = 3
o = 4
u = 5
Examples
replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1r3"
Notes
The input will always be in lowercase. */

function replaceVowel(word) {
	let codes = {
		a: 1, e: 2, i: 3, o: 4, u: 5
	}
	return word.split("").map(x => /[aeoiu]/i.test(x) ? codes[x] : x).join("")
}

console.log(replaceVowel("karachi"))
