/* Substituting the The
Create a function that replaces "the" in the sentence with "an" or "a". Remember that if the next word begins with a vowel, use "an". In the case of a consonant, use "a".

Examples
replaceThe("the dog and the envelope") ➞ "a dog and an envelope"

replaceThe("the boy ran at the wall") ➞ "a boy ran at a wall"

replaceThe("the egg, the spoon and the espionage") ➞ "an egg, a spoon and an espionage"
Notes
Sentences will always be in lowercase.
The last word of the sentence will never be "the".
This won't cover edge cases such as "an hour" or "a unique thing" (since they sound differently to the rule). */

function replaceThe(str) {
	return str.replace(/the(?=\s[aeiou])/ig,'an').replace(/the(?=\s[^aeiou])/ig,'a')
}

console.log(replaceThe("the dog and the envelope"))