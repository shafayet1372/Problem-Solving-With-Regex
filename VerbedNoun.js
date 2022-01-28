/* Verbed Nouns
Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

Examples
verbify("cheese burger") ➞ "cheesed burger"

verbify("salt water") ➞ "salted water"

verbify("orange juice") ➞ "oranged juice"

verbify("shredded cheese") ➞ "shredded cheese" */

function verbify(str) {
	let s=str.split(" ")
    
	let fVal=s[0]
	if(/e$/.test(fVal)){
		fVal+='d'
	}else if(!(/ed$/.test(fVal))){
		console.log(2)
		 fVal+='ed'
	}
	s[0]=fVal
	return s.join(" ")
}

console.log(verbify("shredded cheese"))