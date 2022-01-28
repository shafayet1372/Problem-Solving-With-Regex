/* Bug: Regular Expression
Indira first year computer science student is taking an intro to RegEx class. Her professor gives her the assignment to write a function that 
checks whether an input date as a string is in the format yyyy/mm/dd. She has written a regular expression but the regular expression does not 
seem to be correct. Help her fix the error.

Examples
assignment("12/1/1") ➞ false

assignment("1234/12/01") ➞ true

assignment("2012/1/1") ➞ false

assignment("2012/01/07") ➞ true */

function assignment(d) {
	return /^\d{4}\/\d{2}\/\d{2}$/.test(d) ;
}

console.log(assignment("1234/12/01"))