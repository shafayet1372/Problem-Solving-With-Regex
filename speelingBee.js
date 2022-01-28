/* Spelling Bee
Given a sentence spelling out a word, return true if the spelled letters match the word at the end of the string, or false otherwise.

Examples
validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?") ➞ true

validateSpelling("P. H. A. R. A. O. H. Pharaoh!") ➞ true

validateSpelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.") ➞ false
Notes
The word at the end is always spelled correctly.
Spelled letters and words will always end in punctuation (but ignore all punctuation). */

function validateSpelling(txt) {
	let lastWord=txt.match(/[a-z]+(?=[!\?\.]$)/ig)[0]
	return txt.split(/[a-z]+[!\?\.]$|\.\s/ig).join("").replace(/\s+$/,'').toLowerCase()==lastWord.toLowerCase()

}

console.log(validateSpelling("P. H. A. R. A. O. H. Pharaoh!"))