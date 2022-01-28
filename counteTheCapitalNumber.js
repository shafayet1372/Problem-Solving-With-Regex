/* Count the Capital Letters
Given a string of letters, how many capital letters are there?

Examples
capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0 */

function capitalLetters(str) {
	return (/[A-Z]/).test(str)?str.match(/[A-Z]/g).length:0
}

console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"))