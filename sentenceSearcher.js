/* Sentence Searcher
Create a function that returns the whole of the first sentence which contains a specific word. Include the full stop at the end of the sentence.

Examples
const str = "I have a cat. I have a mat. Things are going swell."

sentenceSearcher(str, "have") ➞ "I have a cat."

sentenceSearcher(str, "MAT") ➞ "I have a mat."

sentenceSearcher(str, "things") ➞ "Things are going swell."

sentenceSearcher(str, "flat") ➞ ""
Notes
Sentences will always end with a period.
Your function should not be case sensitive.
Return an empty string if the word isn't found in the sentence. */

function sentenceSearcher(str, word) {
let result=str.split(/(?<=\.)\s/).filter(x=>new RegExp(`${word}`,'i').test(x))[0]
return result?result:""
}
console.log(sentenceSearcher("I have a cat. I have a mat. Things are going swell.",'cat'))