



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {

	var computerChoice = Math.random();
	if (computerChoice < .33) {

		return "rock";

	}
	else if (computerChoice < .66) {
		return "paper";
	}
	else {
		return "scissors";

	}

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

	jQuery("#computerSelection").text(opponent);

	if ( me == opponent) {
		return ("tie");
	}

	if (me == "scissors") {
		if (opponent == "paper") {
			return("you win!");
		}
		if (opponent == "rock") {
			return ("computer wins");
		}
	}

	if (me == "paper") {
		if (opponent == "scissors") {
			return ("computer wins");
		}
		if (opponent == "rock") {
			return ("you win");
		}
	}

	if (me == "rock") {
		if (opponent == "scissors") {
			return ("you win!");
		}
		if (opponent == "paper") {
			return ("computer wins");
		}

	}

};



jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    jQuery('#scissors').click(function() {

    	// var comp = computerChoice();
    	var result = compare ("scissors", computerChoice());
    	jQuery("#decision").text(result);

    })

    jQuery('#paper').click(function() {

    	// var comp = computerChoice();
    	var result = compare ("paper", computerChoice());
    	jQuery("#decision").text(result);

    })

    jQuery('#rock').click(function() {

    	// var comp = computerChoice();
    	var result = compare ("rock", computerChoice());
    	jQuery("#decision").text(result);

    })

});
