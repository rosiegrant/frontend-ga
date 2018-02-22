console.log("hi!")



jQuery("#submit").click(function() {
	console.log("hi again!")
	// Get valutes
	var a = jQuery("#a").val();
	var b = jQuery("#b").val();


	//If A > B show >
	if (a>b) {
		jQuery("#comparison").text(">");
	}

	//If B > A show A
	if (a<b) {
		jQuery("#comparison").text("<");
	}

	//If A = B show =
	if (a==b) {
		jQuery("#comparison").text("=");
	}


	// if(parseInt(a) == NaN) {
	// 	jQuery("#comparison").text("NaN");
	// }

});



