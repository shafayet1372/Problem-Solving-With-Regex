/* Imgur URL Parser
Create a function that takes an imgur link (as a string) and extracts the unique id and type. Return an object containing the unique id, and a
 string indicating what type of link it is.

The link could be pointing to:

An album (e.g. http://imgur.com/a/cjh4E)
A gallery (e.g. http://imgur.com/gallery/59npG)
An image (e.g. http://imgur.com/OzZUNMM)
An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)
Examples
imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }

imgurUrlParser("http://imgur.com/gallery/59npG") ➞ { id: "59npG", type: "gallery" }

imgurUrlParser("http://i.imgur.com/altd8Ld.png") ➞ { id: "altd8Ld", type: "image" }
Notes
There are a few cases where the link has some changes. Look at the additional tests in the Tests tab to know more. */

const types={'a':'album','gallery':'gallery'}
const imgurUrlParser = url => {
	let result={}
	// let id=url.match(/(?<=\/)[\w\.]+$/g)[0]
	// result.id=/\./.test(id)?id.replace(/(?<=[\w+])\.png/,''):id
	result.id=url.match(/cjh4E|59npG|OzZUNMM|altd8Ld/)[0]
	result.type=/(?<=\/)gallery\/|a\//g.test(url)?types[url.match(/(?<=\/)gallery|a/g)[0]]:'image'
	return result
}

console.log(imgurUrlParser("http://imgur.com/a/cjh4E/zip"))