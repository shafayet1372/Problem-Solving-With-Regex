/* Split a String Based on Vowels and Consonants
Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel 
(like special characters or spaces), treat them like consonants.

Examples
split("abcde") ➞ "aebcd"

split("Hello!") ➞ "eoHll!"

split("What's the time?") ➞ "aeieWht's th tm?"
Notes
Vowels are a, e, i, o, u.
Define a separate isVowel() function for easier to read code (recommendation). */

function split(str) {
	return  [str.match(/[aeiou]/g).join(''),str.match(/[^aeiou]/g).join("")].join("")
}

console.log(split('abcdee'))