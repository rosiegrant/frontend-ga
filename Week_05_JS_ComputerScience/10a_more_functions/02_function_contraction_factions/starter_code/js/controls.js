

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms



    var wordOne = jQuery('#firstWord').val();
    var wordTwo = jQuery('#secondWord').val();

    console.log(wordOne);
    console.log(wordTwo);

    var sol = wordOne.trim() + " " + wordTwo.trim();
    var sol2 = wordTwo.trim() + " " + wordOne.trim();


    if (checkForConjunction(sol) == false) {

        if (checkForConjunction(sol2) != false) {
            console.log("made it!");
            jQuery("#contractionResult").text(checkForConjunction(sol2));
            jQuery(".playAreaResultsLog").append("<p>", wordTwo, " ", wordOne, " ", checkForConjunction(sol2), "</p>");
        } else {
            jQuery("#contractionResult").text("None Found");
            jQuery(".playAreaResultsLog").append(wordOne," ", wordTwo, " ", "<br />");
        }


    } else {
        jQuery("#contractionResult").text(checkForConjunction(sol));
        jQuery(".playAreaResultsLog").append("<p>", wordOne, " ", wordTwo, " ", checkForConjunction(sol), "</p>");
    }
    
    jQuery('#firstWord').val('');
    jQuery('#secondWord').val('');


 

    // Create phrase to test by combining wordOne and wordTwo with a space

        // Test phrase

        // if Test Phrase returns false search phrase with words in reverse order


    // If return is true

            // Set the output variable to the result

            // Set the log variable to wordOne wordTwo and the contraction


            // Set the output variable to "None Found"

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags


        // Update contractionResult

        // Add wordOne + wordTwo + result to log


        // Empty wordOne

        // Empty wordTwo


} // end conjunctionFormChecking





function resetAllForms(){

    jQuery("#contractionResult").empty();
    jQuery('#firstWord').val('');
    jQuery('#secondWord').val('');
    jQuery(".playAreaResultsLog").empty();


} // resetAllForms




jQuery( document ).ready(function() {

        // Bind conjunctionFormChecking to button
        jQuery('#btnCheckConjunction').click(function() {
            conjunctionFormChecking();
        })

        // Bind reset to button
        jQuery('#btnReset').click(function() {
            resetAllForms();
        })



});