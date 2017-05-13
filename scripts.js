
var move = "-100px";
var sliderLimit = -80;

function moveright(){
	var element = document.getElementById('tslshow');
    style = window.getComputedStyle(element);
	var currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition >= sliderLimit){
		document.getElementById("leftArrow").style.display = "block";
		if(element.style.left){
			element.style.left = String(parseInt(element.style.left) - 100) + "px";
			if (currentPosition >= sliderLimit){
				document.getElementById("rightArrow").style.display = "none";
			}
		}
		else{
			element.style.left = move;
			document.getElementById("rightArrow").style.display = "none";
		}
	} 
}

function moveleft(){
	var element = document.getElementById('tslshow');
    style = window.getComputedStyle(element);
	var currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition < 0){
		document.getElementById("rightArrow").style.display = "block";
		if(element.style.left){			
			element.style.left = String(parseInt(element.style.left) +100) + "px";
		}
		if (currentPosition < 0){
			document.getElementById("leftArrow").style.display = "none";
		}
	} 
	else{
		document.getElementById("leftArrow").style.display = "none";
	}
}

window.onload = function(){
	document.getElementById("leftArrow").style.display = "none";
}
