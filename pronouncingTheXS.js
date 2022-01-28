/* Pronouncing the Xs
Create a function which replaces all the x's in the string in the following ways:

Replace all x's with "cks" UNLESS:

The word begins with "x", therefore replace it with "z".
The word is just the letter "x", therefore replace it with "ecks".
Examples
xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"
Notes
All x's are lowercase.
I know that not all words with x's follow this rule, but there are too many edge cases to count!
 */
function xPronounce(sentence) {
	return sentence.split(" ").map(x => {
		if (/^x$/.test(x)) {

			return 'ecks'
		} else if (/^x/.test(x)) {
			console.log(x)
			return x.replace(/x/, 'z')
		} else if (/x/.test(x)) {
			return x.replace(/x/g, 'cks')
		}
		return x
	}).join(" ")
	// .replace(/\sx\s/g,'ecks').replace(/x(?=\s)/g,'cks')
}

console.log(xPronounce("The box ray is xexcellent"))