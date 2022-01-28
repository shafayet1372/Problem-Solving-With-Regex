/* Club Entry
A night club will give you a word. For entrance, you need to provide the right number according to the provided word.

Every given word will have a doubled letter, like "dd" in addiction. To answer the right number you need to find the doubled letter's position in
 the alphabets and multiply this number with 4.

Create a function that takes the argument of word and returns the right number.

Examples
clubEntry("hill") ➞ 48
// 'l' is 12th alphabet
// 12*4 = 48

clubEntry("apple") ➞ 64

clubEntry("bee") ➞ 20 */

function clubEntry(word) {
	let m=word.match(/(\w)\1/)
	let index=m.index
	return (word.charCodeAt(index)-96)*4
	
	
}

console.log(clubEntry("hill"))