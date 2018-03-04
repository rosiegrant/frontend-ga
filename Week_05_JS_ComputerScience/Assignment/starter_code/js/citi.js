jQuery(document).ready(function() {


	//collect user input
	 jQuery('#submit-btn').click(function(e) {

    	e.preventDefault();

    	var city = jQuery('#city-type').val().toLowerCase();



		// change display based on user input 

		// - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		if (city == "new york" || city == "new york city" || city == "nyc") { 
			document.body.className = 'nyc';

		// - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		} else if (city == "san francisco" || city == "sf" || city == "bay area") { 

			document.body.className = 'sf';

		// - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		} else if (city == "los angeles" || city == "la" || city == "lax"){ 
			document.body.className = 'la';

		// - "Austin" or "ATX" make the background of the page austin.jpg
		} else if (city == "austin" || city == "atx") {
			document.body.className = 'austin';


		// - "Sydney" or "SYD" make the background of the page sydney.jpg
		} else if (city == "sydney" || city == "syd"){ 
			document.body.className = 'sydney';

		} 
		else {
			window.alert("you entered a city we don't have on record :( please try again.")
		}


		//reset users input
		jQuery('#city-type').val("");
		jQuery('#city-type').attr('placeholder',"Enter another city name...");
		console.log("made it to the end");

	});



});