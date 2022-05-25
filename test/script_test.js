function roll(sideCount, option) {

    // Defined a function who will stock the randome roll of dice, the +1 avoid the randome number to be 0
    const roll =()=> Math.floor(Math.random()*sideCount)+1;
	
	// Roll the dice twice *Hope we will have a critical sucsses*
    const roll1 = roll();
    //console.log(roll1);
    const roll2 = roll();
    //console.log(roll2);

    // Check the state of the option argument
    if(option == 'advantage'){
        //console.log(Math.max(roll1, roll2))
        return Math.max(roll1, roll2);
    } else if(option == 'disadvantage'){
        //console.log(Math.min(roll1, roll2))
        return Math.min(roll1, roll2);
    } else if(option == undefined){
        //console.log(roll1)
        return roll1;
    } else{
        // In case of mispelling I made the console Throw an error message explaining what's exepting in the option argument.
        throw new Error("If you want to try the option type 'advantage' or 'disadvange' in the option arguments if you dont want them just let option blank.")
    };
};

// Exportation for the testing
module.exports = roll;