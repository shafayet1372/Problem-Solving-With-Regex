/* First N Vowels
Write a function that returns the first n vowels of a string.

Examples
firstNVowels("sharpening skills", 3) ➞ "aei"

firstNVowels("major league", 5) ➞ "aoeau"

firstNVowels("hostess", 5) ➞ "invalid"
Notes
Return "invalid" if the n exceeds the number of vowels in a string.
Vowels are: a, e, i, o, u */

function firstNVowels(s, n) {
	let reg=s.match(/[aeiou]/g)
	if(n>reg.length){
		return 'invalid'
	}
	return reg.slice(0,n).join("")
}

console.log(firstNVowels("major league", 5))