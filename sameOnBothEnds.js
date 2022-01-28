/* Same on Both Ends
Given a sentence, return the number of words which have the same first and last letter.

Examples
countSameEnds("Pop! goes the balloon") ➞ 1

countSameEnds("And the crowd goes wild!") ➞ 0

countSameEnds("No I am not in a gang.") ➞ 1
Notes
Don't count single character words (such as "I" and "A" in example #3).
The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
Mind the punctuation!
Bonus points indeed for using regex! */

function countSameEnds(str) {

	return str.match(/[a-z\s]/ig).join("").split(" ")
	.filter(x=>x.length>1 && x.match(/^[a-z]/ig)[0].toLowerCase()==x.match(/[a-z]$/ig)[0].toLowerCase())
	.length
	
}

console.log(countSameEnds("My mom is not a nun."))