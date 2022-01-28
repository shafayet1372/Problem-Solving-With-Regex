/* Triple + Double = So Much Trouble
Create a function that takes two integers and returns true if a digit repeats three times in a row at any place in num1 AND that same digit repeats two times in a row in num2.

Examples
trouble(451999277, 41177722899) ➞ true

trouble(1222345, 12345) ➞ false

trouble(666789, 12345667) ➞ true

trouble(33789, 12345337) ➞ false
Notes
You can expect every test case to contain exactly two integers. */

function trouble(num1, num2) {
	 if(/(\d)\1\1/.test(num1.toString())){
		let num1Digit=num1.toString().match(/(\d)\1\1/g)[0].slice(0,1)
		return new RegExp(`\(${num1Digit}\)\\1`,'i').test(num2.toString())
	 }
	 return false
}

console.log(trouble(451999277, 41177722899))