jQuery(document).ready(function() {



	//collect user input
	 jQuery('.submit-btn').click(function(e) {

    	e.preventDefault();

    	var city = jQuery('#city-type').val();
    	console.log(city);



	// change display based on user input 
		// - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		// - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		// - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		// - "Austin" or "ATX" make the background of the page austin.jpg
		// - "Sydney" or "SYD" make the background of the page sydney.jpg

	//clear users input
	});


});