/* Correct My Sentence
Mubashir is not so good with the English language. He needs your help to correct his sentences.

Start each sentence with an uppercase alphabet.
For every uppercase letter (other than the first alphabet), you have to place a fullstop(.) followed by an empty space.
There must be only one space between the words and sentences.
Sentence must end with a full stop(.)
Two continuous spaces are not allowed.
correctSentences ("  mubashir loves  edabit  Matt  loves  edabit  ") ➞ "Mubashir loves edabit. Matt loves edabit."

// Remove extra spaces.
// Capitalise first character.
// Dot followed by an empty space before "Matt".
// A dot at the end.
Examples
correctSentences ("  mubashir loves  edabit  Matt  loves  edabit  ") ➞ "Mubashir loves edabit. Matt loves edabit."

correctSentences ("  he is an engineer He sleeps a lot") ➞ "He is an engineer. He sleeps a lot."

correctSentences (" his english is not good Help him     Thank you") ➞ "His english is not good. Help him. Thank you." */

function correctSentences(str) {
	str= str.replace(/^\s+|\s+$|(?<=\s{1})\s+/ig,'')
	let dotWords=str.match(/[a-z]+(?=\s[A-Z])/g)
	console.log(dotWords)
	return str.replace(/^[a-z]/,str[0].toUpperCase()).split(" ").map((x,i,ar)=>(i!=ar.length-1 &&dotWords.find(y=>x==y))?x+'.':x).join(" ")+'.'
}

console.log(correctSentences("  mubashir loves  edabit  Matt  loves  edabit  "))