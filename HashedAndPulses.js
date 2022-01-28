/* Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0] */

function hashPlusCount(str) {
	if (!str.length) {
		return [0, 0]
	}
	let hash = /#/.test(str) ? str.match(/#/g).length : 0
	let plus = /\+/.test(str) ? str.match(/\+/g).length : 0
	return [hash, plus]
}

console.log(hashPlusCount("##+++#"))