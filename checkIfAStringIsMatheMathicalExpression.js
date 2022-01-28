/* Check if a String is a Mathematical Expression
Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

Examples
mathExpr("4 + 5") ➞ true

mathExpr("4*6") ➞ true

mathExpr("4*no") ➞ false
Notes
Should only work with the following operations: +, -, *, /, %
You don't need to test for floats.
int1 and int2 will only be from 0-9 */

function mathExpr(expr) {
	return /^\d+\s*[\+\*-\/%]\s*\d+$/.test(expr)
}

console.log(mathExpr("4*no"))