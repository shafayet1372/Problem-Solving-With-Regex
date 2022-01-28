/* Emphasise the Words
Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while 
the rest of each word should be lowercase.

Examples
emphasise("hello world") ➞ "Hello World"

emphasise("GOOD MORNING") ➞ "Good Morning"

emphasise("99 red balloons!") ➞ "99 Red Balloons!" */

function emphasise(str) {
	if(!/[a-z]/i.test(str)){
		return str
	}
	return str.toLowerCase().split(" ").map(x=>x.replace(/^[a-z]/gi,x[0].toUpperCase())).join(" ")
}

console.log(emphasise("good morniNing"))