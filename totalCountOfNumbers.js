/* Total Count of Numbers in a MultiDimensional Array
Create a function that takes a multidimensional array and return the total count of numbers in that array.

Examples
countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0 */

const countNumber = arr => {
	return arr.flat(Infinity).filter(x=>/^\d+(\.)?\d+$|^\d+$/.test(x)).length
};

console.log(countNumber([["", 17.2, 5, "edabit"]]))