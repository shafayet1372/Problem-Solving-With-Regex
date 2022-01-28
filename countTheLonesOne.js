/* Count the Lone Ones
Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.

Examples
countLoneOnes(101) ➞ 2

countLoneOnes(1191) ➞ 1

countLoneOnes(1111) ➞ 0

countLoneOnes(462) ➞ 0 */

function countLoneOnes(n) {
	if(/1/.test(n.toString())){
     return n.toString().split(/[^1]/).filter(x=>x.length==1).length
	}
	return 0
}
console.log(countLoneOnes(12131415161718191n))