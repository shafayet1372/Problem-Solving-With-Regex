/* Cluster Vowels, Single Out Consonants
Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.

Examples
split("beautifully") ➞ ["b", "eau", "t", "i", "f", "u", "l", "l", "y"]

split("spoonful") ➞ ["s", "p", "oo", "n", "f", "u", "l"]

split("swimming") ➞ ["s", "w", "i", "m", "m", "i", "n", "g"]
Notes
Vowels are: a, e, i, o, u.
All letters will be in lower case. */

function split(word) {
	return word.match(/[^aeiou]|(([aeiou])\1)+/g)
}

console.log(split("beautifully"))