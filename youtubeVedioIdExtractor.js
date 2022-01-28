/* YouTube Video ID Extractor
Given a YouTube URL, extract the video ID and return it as a string.

Examples
youtubeId("https://www.youtube.com/watch?v=XPEr1cArWRg") ➞ "XPEr1cArWRg"

youtubeId("https://youtu.be/BCDEDi5gDPo") ➞ "BCDEDi5gDPo"

youtubeId("https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4") ➞ "vxP3bY-XxY4"
Notes
All input are valid YouTube link */

function youtubeId(link) {
	// let str= link.match(/(?<=\/|v\=)[-_a-z&]+$/i)[0]
return link.match(/(?<=v=)[-_a-z0-9]+|(?<=\/)[a-z0-9]+$/ig)[0]
}

console.log(youtubeId("https://youtu.be/BCDEDi5gDPo"))