/* Letters Only
Check if the given string consists of only letters and spaces and if every letter is in lower case.

Examples
lettersOnly("JAVACRIPT") ➞ false

lettersOnly("javascript") ➞ true

lettersOnly("12321313") ➞ false

lettersOnly("i have spaces") ➞ true

lettersOnly("i have numbers(1-10)") ➞ false

lettersOnly("") ➞ false
Notes
Empty arguments will always return false.
Input values will be mixed (symbols, letters, numbers). */

function lettersOnly(str) {
	if(str==str.toUpperCase()){
		return false
	}
	return /^[a-z\s]+$/.test(str)
}

console.log(lettersOnly("javascript"))