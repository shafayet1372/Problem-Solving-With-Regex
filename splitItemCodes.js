/* Split Item Codes
You have an array of item codes with the following format: "[letters][digits]"

Create a function that splits these strings into their alphabetic and numeric parts.

Examples
splitCode("TEWA8392") ➞ ["TEWA", 8392]

splitCode("MMU778") ➞ ["MMU", 778]

splitCode("SRPE5532") ➞ ["SRPE", 5532] */

function splitCode(item) {
	return [item.match(/[a-z]/ig).join(""),parseInt(item.match(/\d+/g).join(""))]
}

console.log(splitCode('TEWA8392'))