

jQuery(document).ready(function() {

    jQuery('.readmore').click(function(e) {
    	console.log("here!");

    	e.preventDefault();

    	jQuery('.readmore').hide();
    	jQuery('#show-this-on-click').slideDown();
    	jQuery('.readless').show();


	});

    jQuery('.readless').click(function(e) {
    	console.log("here too!");

    	e.preventDefault();

    	jQuery('.readless').hide();
    	jQuery('#show-this-on-click').slideUp("slow", function() {
			jQuery('.readmore').show("slow");

    	} );
    	


	});


})