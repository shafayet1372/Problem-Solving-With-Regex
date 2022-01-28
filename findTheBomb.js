/* Find the Bomb
Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax." */

function bomb(str) {
   return /bomb/i.test(str)?"Duck!!!":"There is no bomb, relax."
}

console.log("There is a bomb.")