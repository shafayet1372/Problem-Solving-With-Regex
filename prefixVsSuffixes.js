/* Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

isPrefix should return true if it begins with the prefix argument.
isSuffix should return true if it ends with the suffix argument.
Otherwise return false.

Examples
isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false */

function isPrefix(word, prefix) {
	let reg=new RegExp(`^${prefix.replace(/-/,'')}`)
	return reg.test(word)
}

function isSuffix(word, suffix) {
	
	let reg=new RegExp(`${suffix.replace(/-/,'')}\$`)
		return reg.test(word)
}
console.log(isSuffix("vocation", "-logy"))