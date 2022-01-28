/* Split String by Identical Characters
Create a function that splits a string into an array of identical clusters.

Examples
splitGroups("555") ➞ ["555"]

splitGroups("5556667788") ➞ ["555", "666", "77", "88"]

splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
Notes
Each cluster should only have one unique character.
The resulting array should be in the same order as the input string.
Should work with letters, numbers and other characters. */

function splitGroups(str) {
	return str.match(/(\w|\W)\1+|\w/g)
}

console.log(splitGroups('abbbcc88999&&!!!_'))