/* Get Free Wi-Fi Anywhere You Go
A new 'hacky' phone is launched, which has the feature of connecting to any Wi-Fi network from any distance away, as long as there aren't 
any obstructions between the hotspot and the phone. Given a string, return how many Wi-Fi hotspots I'm able to connect to.

The phone is represented as a P.
A hotspot is represented as an *.
An obstruction is represented as a #. You cannot access a hotspot if they are behind one of these obstructions.
Examples
nonstopHotspot("*   P  *   *") ➞ 3

nonstopHotspot("*  * #  * P # * #") ➞ 1

nonstopHotspot("***#P#***") ➞ 0
Notes
There will be only one phone.
No other characters, other than spaces, will appear in the tests. */

function nonstopHotspot(area) {
	let str= area.replace(/\s/g,'')
	let findlEFT=/\*P/.test(str)
	let findR=/P\*/.test(str)
	return (findR?str.match(/(?<=P)\*+/g)[0].length:0)+(findlEFT?str.match(/\*+(?=P)/g)[0].length:0)
}

console.log(nonstopHotspot('*  * #  * P # * #'))