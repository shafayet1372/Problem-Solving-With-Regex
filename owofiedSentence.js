/* Owofied a Sentence
Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

Examples
owofied("I'm gonna ride 'til I can't no more")
➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

owofied("Do you ever feel like a plastic bag")
➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

owofied("Cause baby you're a firework")
➞ "Causwe baby you'rwe a fwirwework owo" */

function owofied(sentence) {
	return sentence.replace(/i/g,'wi').replace(/e/g,'we')+" owo"
}

console.log(owofied("I'm gonna ride 'til I can't no more"))