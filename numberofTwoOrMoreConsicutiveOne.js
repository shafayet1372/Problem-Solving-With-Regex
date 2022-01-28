/* Number of Two or More Consecutive Ones
Create a function that counts the number of blocks of two or more adjacent 1s in an array.

Examples
countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
// Two instances: [1, 1] (middle) and [1, 1, 1] (end)

countOnes([1, 0, 1, 0, 1, 0, 1, 0]) ➞ 0

countOnes([1, 1, 1, 1, 0, 0, 0, 0]) ➞ 1

countOnes([0, 0, 0]) ➞ 0
Notes
A single 1 by itself (surrounded by a zero on its left and right), does not count towards the total (see first example).
Each input will contain only zeroes and ones. */

function countOnes(arr) {
	if(!/(1)\1+/.test(arr.join(''))){
		return 0
	}
	return arr.join("").match(/(1)\1+/g).length
}

console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]))