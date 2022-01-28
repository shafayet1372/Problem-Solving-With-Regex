/* Swapping Two by Two
Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.

Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"

swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"

swapTwo("munchkins") ➞ "ncmuinhks"

swapTwo("FFGGHHI") ➞ "GGFFHHI"
Notes
Keep leftover strings in the same order */

function swapTwo(s) {
if(!s){
	return s
}
let len= s.match(/(\w{2})|(\w)/gi)
for(let i=0;i<len.length;i++){
	if(len[i].length==2 && len[i+1].length==2){
		let [a,b]=[len[i],len[i+1]]
		len[i]=b
		len[i+1]=a
		i++
	}
}
return len.join("")
}

console.log(swapTwo('ABCDEFGH'))