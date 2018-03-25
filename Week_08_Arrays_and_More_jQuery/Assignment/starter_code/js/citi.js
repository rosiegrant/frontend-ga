
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];



jQuery(document).ready(function(){ 



	var options = "";
    jQuery.each(cities, function(index, value) {
        options += '<option value="' + value + '">' + value + '</option>';
    });
    jQuery("#city-type").append(options);

    console.log(options);

	jQuery("#city-type").on('change',function() {
	      if (jQuery("#city-type").val() == "NYC") {
	      	jQuery("body").attr("class","nyc");
	      }
	      else if (jQuery("#city-type").val() == "SF") {
	      	jQuery("body").attr("class","sf");
	      }
	      else if (jQuery("#city-type").val() == "LA") {
	      	jQuery("body").attr("class","la");
	      }
	      else if (jQuery("#city-type").val() == "ATX") {
	      	jQuery("body").attr("class","austin");
	      }
	      else if (jQuery("#city-type").val() == "SYD") {
	      	jQuery("body").attr("class","sydney");
	      }
	      else {
	      	jQuery("body").attr("class","og");
	      }


	})



});
