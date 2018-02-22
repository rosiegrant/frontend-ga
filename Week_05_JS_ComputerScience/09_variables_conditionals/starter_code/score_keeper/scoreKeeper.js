
var theScore = 0;

// Function to add 5
function addFive() {
	theScore += 5;
	jQuery("#result").text(theScore);
}


// Function to add 10
function addTen() {
	theScore += 10;
	jQuery("#result").text(theScore);
}

// Function to subtract 1
function subtractOne() {
	theScore -= 1;
	jQuery("#result").text(theScore);
}

// Function to reset to zero
function reset() {
	theScore = 0;
	jQuery("#result").text(theScore);
}

jQuery(document).ready(function() {
	// what you need to happen when the page loads

	// jQuery("#add5").click(function() {
	// 	addFive();
	// })

		jQuery("#add5").click(addFive);
		jQuery("#zero").click(reset);
		jQuery("#add10").click(addTen);
		jQuery("#sub1").click(subtractOne);


		
});