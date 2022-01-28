/* Filter a String
Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

Examples
filterString("*$(#Mu12bas43hiR%@*!") ➞ [2, 6, 4, 8]
// 2 uppercase letters
// 6 lowercase letters
// 4 numbers
// 8 special characters

filterString("^^Edabit^^%$#12379") ➞ [1, 5, 5, 7]

filterString("**Airforce1**") ➞ [1, 7, 1, 4] */

function filterString(txt) {
    let up = txt.match(/[A-Z]/g).length
    let lo = txt.match(/[a-z]/g).length
    let num = txt.match(/\d/g).length
    let sp = txt.match(/\W/g).length
    return [up, lo, num, sp]
}

console.log(filterString("*$(#Mu12bas43hiR%@*!"))