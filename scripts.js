
var move = "-100px";
var sliderLimit = -80;
var element;
var style;
var currentPosition;

function changeArrow(arrow,content){
	document.getElementById(arrow).style.display = content;
}

function moveright(){
	currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition >= sliderLimit){
		changeArrow("leftArrow","block");
		if(element.style.left){
			element.style.left = String(parseInt(element.style.left) - 100) + "px";
			if (currentPosition >= sliderLimit){
				changeArrow("rightArrow","none");
			}
		}
		else{
			element.style.left = move;
			changeArrow("rightArrow","none");
		}
	} 
}

function moveleft(){
	currentPosition = parseInt(style.getPropertyValue('left'));
    if (currentPosition < 0){
		changeArrow("rightArrow","block");
		if(element.style.left){			
			element.style.left = String(parseInt(element.style.left) +100) + "px";
		}
		if (currentPosition < 0){
			changeArrow("leftArrow","none");
		}
	} 
	else{
		changeArrow("leftArrow","none");
	}
}

window.onload = function(){
	element = document.getElementById('maindiv');
	style = window.getComputedStyle(element);
	document.getElementById("leftArrow").style.display = "none";
	console.log(document.getElementById('bank').height);
	var e = document.getElementById('bank').height;
	document.getElementById('rightArrow').style.height = e + "px";
	document.getElementById('leftArrow').style.height = e + "px";
	document.getElementById('rightArrow').style.lineHeight  = e + "px";
	document.getElementById('leftArrow').style.lineHeight  = e + "px";
	console.log(document.getElementById('rightArrow').style.height );
}
