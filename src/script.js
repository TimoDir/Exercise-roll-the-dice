// Finish the program
// If you want the option in your roll write the string 'advantage' or 'disadvantage' when calling the function.
function roll(sideCount, option) {

    // Defined a function who will stock the random roll of dice, the +1 avoid the random number to be 0
    const roll =()=> Math.floor(Math.random()*sideCount)+1;
	
	// Roll the dice twice *Hope we will have a critical success*
    const roll1 = roll();
    const roll2 = roll();

    // Check the state of the option argument
    if(option == 'advantage'){
        // Return the highest value
        return Math.max(roll1, roll2);
    } else if(option == 'disadvantage'){
        // Return the lowest value
        return Math.min(roll1, roll2);
    } else if(option == undefined){
        return roll1;
    } else{
        // In case of misspelling I made the console Throw an error message explaining what's expecting in the option argument.
        throw new Error("If you want to try the option type 'advantage' or 'disadvantage' in the option arguments if you don't want them just let option blank.")
    };
};

// output test
const log = (msg) => {
	const divElement = document.createElement("span");
	divElement.innerText = JSON.stringify(msg);
	document.getElementById("log").append(divElement);
}

// Try uncommenting this
Array(100).fill(null).forEach(() => log(roll(4)))
// Or try one of the option
// Array(100).fill(null).forEach(() => log(roll(4,'advantage')))
// Array(100).fill(null).forEach(() => log(roll(4,'disadvantage')))