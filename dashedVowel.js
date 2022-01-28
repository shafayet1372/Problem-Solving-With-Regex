/* Dashed Vowels
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples
dashed("Edabit") ➞ "-E-d-a-b-i-t"

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" */

function dashed(str) {
	return str.split("").map(x=>/[aeiou]/i.test(x)?`-${x}-`:x).join("")
}

console.log(dashed("Edabit"))