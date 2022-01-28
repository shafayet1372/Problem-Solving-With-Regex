/* A Subtle Switcheroo
Create a function which replaces all instances of "nts" with "nce" and vice versa if they are at the end of a word.

Examples
switcheroo("The elephants in France were chased by ants!") ➞ "The elephance in Frants were chased by ance!"

switcheroo("While he rants, I fall into a trance...") ➞ "While he rance, I fall into a trants..."

switcheroo("Bounced over the fence!") ➞ "Bounced over the fents!"
Notes
Empty strings should return just an empty string (see example #2).
Ignore punctuation and any instances where "nts" or "nce" are not at the end of a word (see example #3). */

function switcheroo(txt) {
	console.log('trance'.match(/nce(?=\.+$)|nce$/ig))
	return txt.split(" ").map(x => {
		if (/nce(?=[\.,!]+)|nce$/i.test(x)) {
			console.log(x)
			return x.replace(/nce(?=[\.!,]+)|nce$/ig, 'nts')
		} else if (/nts(?=[\.,!]+)|nts$/i.test(x)) {
			return x.replace(/nts(?=[\.!,]+)|nts$/ig,  'nce')
		}
		return x
	}).join(" ")

}

console.log(switcheroo("While he rants, I fall into a trance..."))