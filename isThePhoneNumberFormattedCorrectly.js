/* Is the Phone Number Formatted Correctly?
Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. 
Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

This is what a valid phone number looks like:

(123) 456-7890
Examples
isValidPhoneNumber("(123) 456-7890") ➞ true

isValidPhoneNumber("1111)555 2345") ➞ false

isValidPhoneNumber("098) 123 4567") ➞ false */

function isValidPhoneNumber(str) {
	return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(str)
}

console.log(isValidPhoneNumber('(123) 456-7890'))