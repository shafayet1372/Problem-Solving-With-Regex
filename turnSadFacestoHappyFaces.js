/* Turn That Frown Upside Down
It is important to be happy! Therefore, you must create a function that takes a sentence containing sad faces and turn them into happy ones! This involves changing only the mouths.

Sad face examples: :( 8( x( ;(
Happy face examples: :) 8) x) ;)
Make sure to only change the face if there are eyes before them, round(3.4) wouldn't become round)3.4) (for example).

Examples
makeHappy("My current mood: :(") ➞ "My current mood: :)"

makeHappy("I was hungry 8(") ➞ "I was hungry 8)"

makeHappy("print('x(')") ➞ "print('x)')"
Notes
Faces such as :((((((( are not included. */

function makeHappy(str) {
	return str.replace(/(?<=:|8|x|;)\(/g,')')
}

console.log(makeHappy("My current mood: :("))