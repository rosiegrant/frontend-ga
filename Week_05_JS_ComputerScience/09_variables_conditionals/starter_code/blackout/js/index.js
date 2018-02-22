var lights = "on";

function switchLights(e) {

	// e.preventDefault();
 //if lights are on 
 if (lights == "on") {
 	jQuery("body").addClass("dark");
 	lights = "off";

 } else {
 	//turn off
 	jQuery("body").removeClass("dark");
 	lights = "on";
 }
}

jQuery('#light_switch').click(switchLights);
