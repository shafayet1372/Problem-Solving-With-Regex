/* Running Athlete 🏃
No description.
Guess the code from test cases.
Examples
runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"

runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"

runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"

runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_" */
function runningAthlete(act, txt) {

	return txt.split("").map((x, i) => {
		if (x == '|' && (act[i] == 'run')) {

			return '/'
		} else if (x == '|' && act[i] == 'jump') {
			return '|'
		} else if (x == '_' && ((act[i] == 'jump' && act[i + 1] == 'jump') || (act[i - 1] == 'jump' && act[i] == 'jump'))) {
			return 'x'
		} else if (x == '_' && (act[i] == 'jump' && act[i + 1] == 'run') || (act[i] == 'jump' && act[i - 1] == 'run')) {
			return 'x'
		}
		return '_'
	}).join("")

}

console.log(runningAthlete(["jump", "run", "jump", "run", "jump"], "_|_|_"))