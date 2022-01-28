/* Wurst Is Better
Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst,"
 unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.

German Wursts	Convert to Wurst
Bratwurst	Kielbasa
Kochwurst	Chorizo
Leberwurst	Moronga
Mettwurst	Salami
Rostbratwurst	Sausage
~	Andouille
~	Naem
~	Merguez
~	Gurka
~	Snorkers
~	Pepperoni
Rules
Append sausages from the "Convert to Wurst" column with "wurst".
Do not replace any German sausage with the word "Wurst".
The word "Wurst" must be title case.
Examples
wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"

wurstIsBetter("sich die Wurst vom Brot nehmen lassen") ➞ "sich die Wurst vom Brot nehmen lassen"

wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"
Notes
All German sausage names contain the word "wurst */

const names=['Kielbasa','Chorizo','Moronga','Salami','Sausage','Andouille',
'Naem','Merguez','Gurka','Snorkers','Pepperoni'
]
function wurstIsBetter(str) {
	return str.split(" ").map(x=>{
		
			return x.replace(new RegExp(`${names.find(y=>x.match(new RegExp(`${y}`,'i')))}`,'ig'),'Wurst')	
		
	}).join(" ")
}

console.log(wurstIsBetter("Bratwurst and Rostbratwurst are sausages"))