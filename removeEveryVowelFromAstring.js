/* Remove Every Vowel from a String
Create a function that takes a string and returns a new string with all vowels removed.

Examples
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!" */

function removeVowels(str) {
	return str.replace(/[aeiou]/gi,'')
}

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))