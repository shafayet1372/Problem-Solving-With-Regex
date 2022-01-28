/* Valid JavaScript Comments
In JavaScript, there are two types of comments:

Single-line comments start with //
Multi-line or inline comments start with /* and end with */
The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line 
comments in between multi-line comments in between the /* and */.

Create a function that returns true if comments are properly formatted, and false otherwise.

Examples
commentsCorrect("//////") ➞ true
// 3 single-line comments: ["//", "//", "//"]

commentsCorrect("/**//**////**/") ➞ true
// 3 multi-line comments + 1 single-line comment:
// ["/*", "*/", "/*", "*/", "//", "/*", "*/"]

commentsCorrect("///*/**/") ➞ false
// The first /* is missing a */

commentsCorrect("/////") ➞ false
// The 5th / is single, not a double // */

function commentsCorrect(str) {
	let result = str.match(/(\/\/)|(\/\*)|(\*\/)|\//g)

	for (let i = 0; i < result.length; i++) {
		if (result[i] == '/') {
			return false
		} else if (result[i] == '/*') {
			if (result[i + 1] != '*/') {
				return false
			} else {
				i++
			}
		} else if (result[i] == '*/') {
			return false
		}
	}
	return true
}

console.log(commentsCorrect("///"))