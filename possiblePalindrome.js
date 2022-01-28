/* Possible Palindrome
Create a function that determines whether it is possible to build a palindrome from the characters in a string.

Examples
possiblePalindrome("acabbaa") ➞ true
// Can make the following palindrome: "aabcbaa"

possiblePalindrome("aacbdbc") ➞ true
// Can make the following palindrome: "abcdcba"

possiblePalindrome("aacbdb") ➞ false

possiblePalindrome("abacbb") ➞ false */

function possiblePalindrome(str) {

	let result = [...new Set(str.split(''))].map(x => str.match(new RegExp(`${x}`, 'ig'))).flat(Infinity).reduce((acc, val) => {
		if (acc[val]) {
			acc[val]++
		} else {
			acc[val] = 1
		}
		return acc

	}, {})
	console.log(result)
	return Object.values(result).filter(x => x % 2 == 1).length <= 1
}

console.log(possiblePalindrome('bbaa'))