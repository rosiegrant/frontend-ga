

function switchGrey(){
	// Turn background grey
	document.body.style.backgroundColor = "gray";

	// Turn text color white
	document.body.style.color = "white;"

}

function switchWhite(){
	// Turn background grey
	document.body.style.backgroundColor = "white";

	// Turn text color white
	document.body.style.color = "black;"

}

document.getElementById("grayButton").onclick = switchGrey;
document.getElementById("whiteButton").onclick = switchWhite;
