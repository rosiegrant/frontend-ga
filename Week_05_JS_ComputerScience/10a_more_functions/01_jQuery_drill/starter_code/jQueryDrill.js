jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
    jQuery('#concatButton').click(function() {

    	var concatOne = jQuery('#concatOne').val();
    	var concatTwo = jQuery('#concatTwo').val();

    	console.log(concatOne);
    	console.log(concatTwo);

    	var sol = concatOne + concatTwo;
    	console.log(sol);

    	jQuery("#concatResult").text(sol);



    })




    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output

    jQuery('#add20Button').click(function() {

    	var toAdd = parseInt(jQuery('#add20Input').val());
    	// var toAdd = jQuery('#add20Input').val();

    	console.log(toAdd);

    	var sol = toAdd + 20;
    	jQuery("#add20Output").text(sol);

    })
   

    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
    jQuery('#appendButton').click(function() {

    	var input1 = jQuery('#appendInput').val();
    	// var toAdd = jQuery('#add20Input').val();

    	console.log(input1);

    	jQuery("#appendOutput").append(input1);
    	jQuery("#appendOutput").append("\n");

    })

});