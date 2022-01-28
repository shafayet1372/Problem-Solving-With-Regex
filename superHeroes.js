/* Superheroes
Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

Examples
superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
➞ ["Batman", "Spider-man", "Superman"]

superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
➞ ["Aquaman"]

superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
➞ []
Notes
Wonder-Woman, Catwoman and Invisible-Woman are superheroin */

function superheroes(heroes) {
	return heroes.filter(x=>!/^wonder|cat|invisible/i.test(x) &&/man$/.test(x) ).sort((a,b)=>a<b?-1:1)
}

console.log(superheroes(["Iron-man", "Thor", "Black-Panther", "Iceman", "Catwoman", "Invisible-Woman"]))