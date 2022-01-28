/* Grab the City
Write a function to return the city from each of these vacation spots.

Examples
grabCity("[Last Day!] Beer Festival [Munich]") ➞ "Munich"

grabCity("Cheese Factory Tour [Portland]") ➞ "Portland"

grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]") ➞ "Kyoto" */

function grabCity(str) {
	return str.match(/(\[(\w+\s?)+\])$/g).join("").replace(/[\[\]]/g,'')
}

console.log(grabCity("[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]"))