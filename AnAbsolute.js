/* An Absolute
Given a sentence, create a function that replaces every "a" as an article with "an absolute". It should return the same string without any change if it doesn't have any "a".

Examples
absolute("I am a champion!!!") ➞ "I am an absolute champion!!!"

absolute("Such an amazing bowler.") ➞ "Such an amazing bowler."

absolute("A man with no haters.") ➞ "An absolute man with no haters."
Notes
Watch for uppercase letters as shown in example #3 */

function absolute(str) {
	if(!/a/.test(str)){
		return str
	}
	 if(/^a/i.test(str)){
		return str.replace(/^a/i,"An absolute")
	 }else if(/\sa\s/.test(str)){
		 return str.replace(/\sa\s/,' an absolute ')
	 }else{
		 return str
	 }
}
console.log(absolute("A hero of the leaf"))