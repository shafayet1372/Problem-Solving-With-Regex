/* Tidy Title and Author Strings
You have an array of strings, each consisting of a book title and an author's name.

To illustrate:

[
  ["   Death of a Salesman - Arthur Miller    "],
  ["   Macbeth - William Shakespeare    "],
  ["    A Separate Peace - John Knowles     "],
  [" Lord of the Flies - William Golding"],
  ["A Tale of Two Cities - Charles Dickens"]
]
Create a function that takes an array like the one above and transforms it into the same format as the one below:

[
  ["Death of a Salesman", "Arthur Miller"],
  ["Macbeth", "William Shakespeare"],
  ["A Separate Peace", "John Knowles"],
  ["Lord of the Flies", "William Golding"],
  ["A Tale of Two Cities", "Charles Dickens"]
]
Examples
tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]) ➞ [
  "The Catcher in the Rye", "J. D. Salinger",
  "Brave New World", "Aldous Huley",
  "Of Mice and Men", "John Steinbeck"
] */

function tidyBooks(arr) {
	return arr.map(x=>{
		let name=x.replace(/^\s+|\s+$/g,'')
        let newname=name.split(/-/)
		let fName=newname[0].replace(/\s+$/,'')
		let lName=newname[1].replace(/^\s+/g,'')
		return [fName,lName]
	})
}

console.log(tidyBooks(["     The Catcher in the Rye - J. D. Salinger    ", 
"    Brave New World - Aldous Huxley   ", 
"    Of Mice and Men - John Steinbeck    "]))