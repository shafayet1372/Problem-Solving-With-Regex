/* Split and Delimit
Write a function that splits a string into substrings of size n, adding a specified delimiter between each of the pieces.

Examples
splitAndDelimit("bellow", 2, "&") ➞ "be&ll&ow"

splitAndDelimit("magnify", 3, ":") ➞ "mag:nif:y"

splitAndDelimit("poisonous", 2, "~") ➞ "po~is~on~ou~s"
Notes
N/A */
function splitAndDelimit(str, num, del) {
	return str.match(new RegExp(`\[a-z\-\]{${num}}|\[a-z\-\]+`,'g')).map((x,i,arr)=>(i!=arr.length-1)?`${x+del}`:x).join("")
}

console.log(splitAndDelimit("shape-shifting", 5, '^'))