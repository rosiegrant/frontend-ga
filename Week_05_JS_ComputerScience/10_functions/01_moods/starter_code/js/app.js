//wait for the DOM elements to load before executing

    // Create a function that runs whenever the submit button is clicked
    function clicked(e) {

        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        var moodvalue = jQuery("#mood").val().toLowerCase().trim();

        //Correct for capitalization


        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if (moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic") {
        	console.log ("omg!");
        	jQuery(".moodring div").attr("class","excited");
        }
        // if the user inputs happy/good/great change the CSS class to 'happy'

        else if (moodvalue == "happy" || moodvalue == "good" || moodvalue == "great") {
        	console.log ("omg!");
        	jQuery(".moodring div").attr("class","happy");
        }

        // if the user inputs bad/angry change the CSS class to 'bad'
        else if (moodvalue == "bad" || moodvalue == "angry") {
        	console.log ("omg!");
        	jQuery(".moodring div").attr("class","bad");
        }

        else {
        	window.alert("you entered the wrong value! please try again")
        }
    }
    // Listen for user interaction on the submit button.
    jQuery('#submit-btn').click(clicked)
