
var move = "-100px";
var sliderLimit = -750;

function moveright(){
	var element = document.getElementById('tslshow');
    style = window.getComputedStyle(element);
	var currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition >= sliderLimit){
		if(element.style.left){
			element.style.left = String(parseInt(element.style.left) - 100) + "px";
		}
		else{
			element.style.left = move;
		}
	} 
}

function moveleft(){
	var element = document.getElementById('tslshow');
    style = window.getComputedStyle(element);
	var currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition < 0){
		if(element.style.left){			
			element.style.left = String(parseInt(element.style.left) +100) + "px";
		}
	} 
}
