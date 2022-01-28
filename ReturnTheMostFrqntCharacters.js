/* Return the Most Frequent Character
Write a function that returns the most frequent character in an array of words.

Examples
mostFrequentChar(["apple", "bandage", "yodel", "make"])
➞ ["a", "e"]

mostFrequentChar(["music", "madness", "maniac", "motion"])
➞ ["m"]

mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"])
➞ ["e", "h", "i"]
Notes
If multiple characters tie for most frequent, list all of them in alphabetical order.
Words will be in lower case. */
function mostFrequentChar(arr) {

	let totals = arr.join('').match(/[a-z]/ig).reduce((acc, val) => {
		acc[val] ? acc[val] += 1 : acc[val] = 1
		return acc
	}, {})
	let mostFrq = Object.values(totals).sort((a, b) => b - a)[0]
	return Object.entries(totals).filter(x => x[1] == mostFrq).map(x => x[0]).sort()
} function checkIfDannyIsHere(str) {

}

console.log(mostFrequentChar(["apple", "bandage", "yodel", "make"]))