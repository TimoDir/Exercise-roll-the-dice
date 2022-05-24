// Finish the program
function roll(sideCount) {
	return 0
}

// output test
const log = (msg) => {
	const divElement = document.createElement("span");
	divElement.innerText = JSON.stringify(msg);
	document.getElementById("log").append(divElement);
}
// Try uncommenting this
 // Array(100).fill(null).forEach(() => log(roll(4)))