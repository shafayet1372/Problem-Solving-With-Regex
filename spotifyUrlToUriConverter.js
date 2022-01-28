/* Spotify URL to URI Converter
Write a function that converts Spotify URL's to URI's and vice versa.

Examples
spotiConv(`https://open.spotify.com/artist/4IZLJdhHCqAvT4pjn8TLH5`) ➞ `spotify:artist:4IZLJdhHCqAvT4pjn8TLH5`

spotiConv(`spotify:album:3W7DQfYXpm7N4R5mv4lg3t`) ➞ `https://open.spotify.com/album/3W7DQfYXpm7N4R5mv4lg3t`

spotiConv(`https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn`) ➞ `spotify:track:0bYg9bo50gSsH3LtXe2SQn`
Notes
Check the examples for the formatting. */

function spotiConv(lnk) {
	let checkUserId = /user/.test(lnk)
	if (/https/.test(lnk)) {
		let userId = checkUserId ? lnk.match(/(?<=user\/)[\d]+/)[0] : null
		let name = !userId ? lnk.match(/(?<=https:\/\/open.spotify.com\/)[a-z]+/i) : lnk.match(/[a-z]+(?=\/[a-z0-9]+$)/i)
		return `spotify:${userId ? `user:${userId}:` : ''}${name}:${lnk.match(/(?<=\/)[a-z0-9]+$/gi)[0]}`
	}
	let userId = checkUserId ? lnk.match(/(?<=user:)[\d]+/)[0] : null
	let name = !userId ? lnk.match(/(?<=spotify:)[a-z]+/) : lnk.match(/[a-z]+(?=:[a-z0-9]+$)/i)
	let id = lnk.match(/(?<=:)[a-z0-9]+$/ig)
	return `https://open.spotify.com/${userId ? `user/${userId}/` : ''}${name[0]}/${id[0]}`
}

console.log(spotiConv("spotify:user:118542705:playlist:48zI8I2lp1S8jxLSYhORyJ"))