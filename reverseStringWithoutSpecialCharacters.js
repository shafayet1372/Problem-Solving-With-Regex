/* Reverse String Without Affecting Special Characters
Reverse the string without affecting special characters and numbers.

Examples
revSpecstring("AFC#47GH$Ieu") ➞ "ueI#47HG$CFA"

revSpecstring("guyhiuj1234!@#$%rtyhghu") ➞ "uhghytr1234!@#$%juihyug"

revSpecstring("12!@" ) ➞ "12!@"
Notes
Try with for loops. */
function revSpecstring(n) {
	let s = n.split("")
	let indexs = []
	for (let i = 0; i < s.length; i++) {
		if (!/[a-z]/i.test(s[i])) {
			indexs.push(i)
		}
	}
	let rev = s.filter(x => /[a-z]/i.test(x)).reverse()
	for (let i = 0; i < indexs.length; i++) {
		rev.splice(indexs[i], 0, s[indexs[i]])
	}
	return rev.join("")
}

console.log(revSpecstring("AFC#47GH$Ieu"))