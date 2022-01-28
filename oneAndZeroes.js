/* Ones and Zeroes
Write a function that returns true if every consecutive sequence of ones is followed by a consecutive sequence of zeroes of the same length.

Examples
sameLength("110011100010") ➞ true

sameLength("101010110") ➞ false

sameLength("111100001100") ➞ true

sameLength("111") ➞ false */

function sameLength(s) {
	let ones= s.match(/(1)+/g)
	let zeros=s.match(/(0)+/g)

	if(ones.length!=zeros.length){
		return false
	}
	return ones.every((x,i)=>zeros[i].length==x.length)
}
console.log(sameLength('1100'))