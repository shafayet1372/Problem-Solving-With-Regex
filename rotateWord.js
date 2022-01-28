/* Rotated Words
Some characters do not change after a rotation of 180 degrees. They can be read, although sometimes in a different way. For example, 
uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and vice versa.

So, the word "WOW" turns into the word "MOM". On the other hand, the word "HOME" cannot be rotated.

Find the number of unique readable Rotated Words in the input string txt (without duplicates).

Examples
rotatedWords("HSSN") ➞ 1
// String can be rotated to a valid string

rotatedWords("OS IS UPDATED") ➞ 2
// "OS" and "IS" can be rotated to a valid string

rotatedWords("MUBASHIR") ➞ 0
Notes
String contains only uppercase letters.
 */
function rotatedWords(txt) {
	
	return [...new Set(txt.split(" "))].filter(x=>/^[hwminosxz]+$/i.test(x)).length
}

console.log(rotatedWords("WHO IS WHO"))