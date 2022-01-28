/* Remove the Letters ABC
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does 
not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null
Notes
If the given string does not contain "a", "b", or "c", return null. */

function removeABC(str) {
	if(!/[abc]/i.test(str)){
		return null
	}
	return str.replace(/[abc]/gi,'')
}

console.log(removeABC("This might be a bit hard"))