	
	console.log("hello");

	// list of images
	var animalImageList = ["animal1.jpg","animal2.jpg","animal3.jpg","animal4.jpg",
		"animal5.jpg","animal6.jpg", "animal7.jpg"];

	// know what we're on
	var imageNumber = 0;

	//function to set image
	function setImage(imageNumberSelected) {

		var newSrc = "images/" + animalImageList[imageNumberSelected];
		jQuery("#image-to-vote-on").attr("src", newSrc);

	}

	//function for next image
	function nextImage() {
		console.log("next!");
		imageNumber++;

		if (imageNumber >= animalImageList.length) {
			imageNumber = 0;
		} 

		setImage(imageNumber);
	

	}
		//fucntion for previous

	function prevImage() {
		console.log("prev!");

		imageNumber--;

		if (imageNumber < 0) {
			imageNumber =  animalImageList.length - 1;
		} 

		setImage(imageNumber);
	

	}


	jQuery(document).ready(function(){
		console.log("hi");
		jQuery("#btn-next").on("click",nextImage);
		jQuery("#btn-prev").on("click",prevImage);
	});
