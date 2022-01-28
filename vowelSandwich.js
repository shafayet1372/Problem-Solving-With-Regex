/* Vowel Sandwich
Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

The first and last characters must be a consonant.
The character in the middle must be a vowel.
Examples
isVowelSandwich("cat") ➞ true

isVowelSandwich("ear") ➞ false

isVowelSandwich("bake") ➞ false

isVowelSandwich("try") ➞ false
Notes
Return false if the word is not 3 characters in length.
All words will be given in lowercase.
y is not considered a vowel */

function isVowelSandwich(str) {
	if(str.length!=3){
		return false
	}
	return /[^aeiou][aeiou][^aeiou]/.test(str)
}

console.log(isVowelSandwich('cat'))