/**
 * Function to rescale image
 */
function zoomIn(){
	
	
	var img=document.getElementById("display-image");
	img.style.backgroundSize= 250 + "px" ; 
}

function zoomEqual(){
	
	
	var img=document.getElementById("display-image");
	img.style.backgroundSize= 170 + "px" ; 
}

function zoomOut(){
	
	var img=document.getElementById("display-image");
	img.style.backgroundSize= 130 + "px" ; 	
}