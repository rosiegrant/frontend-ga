
//create array of all possible cities
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];



jQuery(document).ready(function(){ 

	//add list of options
	var options = "";
    jQuery.each(cities, function(index, value) {
        options += '<option value="' + value + '">' + value + '</option>';
    });
    jQuery("#city-type").append(options); //add to HTML 


    //check which option is selected 
	jQuery("#city-type").on('change',function() {

	      if (jQuery("#city-type").val() == "NYC") { //nyc
	      	jQuery("body").attr("class","nyc");
	      }
	      else if (jQuery("#city-type").val() == "SF") { //sf
	      	jQuery("body").attr("class","sf");
	      }
	      else if (jQuery("#city-type").val() == "LA") { //la
	      	jQuery("body").attr("class","la");
	      }
	      else if (jQuery("#city-type").val() == "ATX") { //austin
	      	jQuery("body").attr("class","austin");
	      }
	      else if (jQuery("#city-type").val() == "SYD") { //sydney
	      	jQuery("body").attr("class","sydney");
	      }
	      else {
	      	jQuery("body").attr("class","og"); //base case
	      }


	})



});
