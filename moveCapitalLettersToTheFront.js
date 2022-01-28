/* Move Capital Letters to the Front
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
 */
function capToFront(s) {
	let f1=s.match(/[a-z]/g)
	let f2=s.match(/[A-Z]/g)
	return f2.join("")+f1.join("")
}

console.log(capToFront("hApPy"))