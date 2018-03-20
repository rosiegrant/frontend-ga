function selectPet(petType){

    // Get the specific pet data set
    data = petData[petType];

    // Set the title
    jQuery("#petDisplayName").html(data.displayName);

    // Empty the specification data

    // Add the space required, size, weight
    jQuery("#size").html(data.size);



    // Add logic to add the trainability and lap size images
    jQuery("#trainable").html("trainable");
    jQuery("#fitsOnLap").html("fits on lap");


    if (data.trainability == true) {
        jQuery("#trainCheck").attr("src","img/check.png");
    } else {
        jQuery("#trainCheck").attr("src","img/ex.png");
    }

    if (data.fitsOnLap == true) {
        jQuery("#lapCheck").attr("src","img/check.png");
    } else {
        jQuery("#lapCheck").attr("src","img/ex.png");
    }

    // Add the foods (may require loop)
    var foods = "";
    jQuery.each(data["foods"], function(index,value)  {
        foods += "<li>"+value+"</li>"
    });
    foods = "<ul>"+foods + "</ul>"
    jQuery("#foods").html(foods);
    


    // Update the images

        // Set the main image
        jQuery(".photoLarge").attr("src", data.images[0].img);

        // Empty the thumbnails
        jQuery(".thumbHaus").empty();

         // Add the thumbnails

        var thumbNails = ""
        for (var i=0; i < data.images.length; i++) {
            thumbNails += '<a href="'+ data.images[i].img + '"><img class="photoThumb" alt="" src="' + data.images[i].thumb + '"/></a>'

        }

        jQuery(".thumbHaus").append(thumbNails);

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
        jQuery(".thumbHaus a").on("click", function() {
            event.preventDefault();
            thePhoto = jQuery(this).attr('href');
            jQuery(".photoLarge").attr("src", thePhoto);


        });


    // Empty the ideal for
    jQuery(".idealFor").empty();

    // Insert the ideal for
    var idealFor = "";
    jQuery.each(data["idealOwner"], function(index, value) {
        idealFor += "<li>" + value + "</li>"
    });
    idealFor = "<ul>" + idealFor + "</ul>";
    jQuery(".idealFor").append(idealFor);


    // Empty the Adoption Groups
    jQuery(".adoptionGroups").empty();

    // Add the adoption groups
    var adoptionGroups = "";
    jQuery.each(data["adoption"], function(index, value) {
        adoptionGroups += '<li><a href="'+ value.url + '">' + value.name + "</a></li>"
    });
    jQuery(".adoptionGroups").append(adoptionGroups);



}// end selectPet



jQuery(document).ready(function(){

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    jQuery("#petType").on('change',function() {
        selectPet(jQuery('#petType').val());
    })
    

});