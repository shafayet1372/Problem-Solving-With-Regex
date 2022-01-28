/* Given a string, return if a given letter always appears immediately before another given letter.

Worked Example
bestFriend("he headed to the store", "h", "e") ➞ true

// All occurences of "h": ["he", "headed", "the"]
// All occurences of "h" have an "e" after it.
// Return true
Examples
bestFriend("he headed to the store", "h", "e") ➞ true

bestFriend("i found an ounce with my hound", "o", "u") ➞ true

bestFriend("we found your dynamite", "d", "y") ➞ false
Notes
Don't count letters with spaces between them (example #3).
All sentences will be given in lowercase. */

function bestFriend(str, a, b) {
	if(a==b){
		return false
	}
	return str.split(" ").filter(x=>new RegExp(`${a}`,'i').test(x)).every(y=>{
		let occu=y.match(new RegExp(`${a}`,'g')).length
		let len=y.match(`${a+b}`,'g')
		len=!len?false:len.length
		return occu==len
	})
}

console.log(bestFriend('go to edabit and meditate', 'e', 'd'))