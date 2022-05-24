// Finish the program
// If you want the option in your roll write the string 'advantage' or 'disadvantage' when calling the function.
function roll(sideCount, option) {

    // Defined a function who will stock the randome roll of dice, the +1 avoid the randome number to be 0
    const roll =()=> Math.floor(Math.random()*sideCount)+1;

	return roll(sideCount)
}

// Exportation for the testing
module.exports = roll;

// output test
const log = (msg) => {
	const divElement = document.createElement("span");
	divElement.innerText = JSON.stringify(msg);
	document.getElementById("log").append(divElement);
}
// Try uncommenting this
 // Array(100).fill(null).forEach(() => log(roll(4)))