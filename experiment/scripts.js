
// var view = $("#tslshow");
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

// $("#rightArrow").click(function(){

    // var currentPosition = parseInt(document.getElementById("tslshow").css("left"));
    // if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

// });
// $("#leftArrow").click(function(){

    // var currentPosition = parseInt(view.css("left"));
    // if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400});

// });