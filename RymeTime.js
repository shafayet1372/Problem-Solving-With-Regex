/* Rhyme Time
Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the 
last word from each sentence contains the same vowels.

Examples
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
// Capitalization and punctuation should not matter.

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false
Notes
Case insensitive.
Here we are disregarding cases like "thyme" and "lime".
We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels). */

function doesRhyme(str1, str2) {
	let first=str1.replace(/[^\w\s]/,'').toLowerCase().match(/[a-z]+$/)[0].match(/[aeiou]/ig)
	let last=str2.replace(/[^\w\s]/,'').toLowerCase().match(/[a-z]+$/)[0].match(/[aeiou]/ig)
     if(first.length!=last.length){
		 return false
	 }
	 return first.every((x,i)=>last[i]==x)
	
}

console.log(doesRhyme('down by the bay', 'where the watermelons grow'))