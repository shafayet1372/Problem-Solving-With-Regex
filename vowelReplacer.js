/* Vowel Replacer
Create a function that replaces all the vowels in a string with a specified character.

Examples
replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"

replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*" */

function replaceVowels(str, ch) {
	return str.replace(/[aeiou]/ig,ch)
}