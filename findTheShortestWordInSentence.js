/* Find the Shortest Word(s) in a Sentence
Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).

Examples
findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]

findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]

findShortestWords("We become what we think about.") ➞ ["we", "we"]

findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
Notes
Periods, commas and other special characters don't count as part of a word's length.
Remember to sort the array of words alphabetically before returning your result.
Return words in lowercase only. */

function findShortestWords(str) {
	let s= str.replace(/[^\w\s]/g,'').toLowerCase().split(" ").sort((a,b)=>a.length-b.length)
	return s.filter(x=>x.length==s[0].length && /^[a-z]+$/i.test(x)).sort((a,b)=>a<b?-1:1)
}

console.log(findShortestWords("The quick brown fox jumped over the lazy dogs back."))