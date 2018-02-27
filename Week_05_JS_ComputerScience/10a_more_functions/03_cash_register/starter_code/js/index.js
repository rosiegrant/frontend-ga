/*

 Some useful javascript functions and methods that can be used to build this.

 event.preventDefault();
 parseFloat()
 toFixed()
 jQuery().append();
 jQuery().val();
 jQuery().submit();


 */

// total will store the running total, starting at 0
var total = parseFloat(0);

// `enter()` reads the user's input, and updates the receipt
function enter(e) {

    e.preventDefault();
    // Set up variables to use
    var thisNumber = jQuery('#newEntry').val();
    console.log(thisNumber);
    // Prevent form submission


    // Read the user input

    // Convert to decimal
    thisNumber = parseFloat(thisNumber).toFixed(2);

    // Convert to currency

    // Add line item to table
    jQuery("#entries").append("<p>", thisNumber, "</p>");
    // Update the running total

    // Print the updated total with proper currency formatting
    total = parseFloat(thisNumber) + parseFloat(total);
    jQuery("#total").text(total);

    // Clear out the input field, ready for next value
}

// Use this to convert a number to U.S. currency format

    // Convert the number to decimal

    // Round to 2 decimal places

    // Add the $ before the number

    // Send back the result


// When the user submits the form, run the `enter` function

jQuery(document).ready(function() {

        jQuery('#newEntry').keypress(function(e) {
            var code = e.keyCode || e.which;
            if(code==13) {
                enter(e);
            }
    });
})
