/* Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
Return true if the amount of x's and o's are the same.
Return false if they aren't the same amount.
The string can contain any character.
When "x" and "o" are not in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false */

function XO(str) {
	
	if(/o/i.test(str) && /x/i.test(str)){
		return str.match(/o/gi).length==str.match(/x/gi).length
		
	}else if(!/o|x/.test(str)){
		return true
	}
	return false
	
}

console.log(XO('ooxx'))