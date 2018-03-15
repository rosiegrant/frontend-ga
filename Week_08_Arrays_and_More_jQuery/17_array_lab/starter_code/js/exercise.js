function selectPet(petType){

    // Get the specific pet data set
    data = petData[petType];

    // Set the title
    jQuery("#petDisplayName").html(data.displayName);

    // Empty the specification data

    // Add the space required, size, weight
    jQuery("#size").html(data.size);



    // Add logic to add the trainability and lap size images


    // Add the foods (may require loop)



    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    jQuery("#petType").on('change',function() {
        selectPet(jQuery('#petType').val());
    })
    

});