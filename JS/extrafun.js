// Sara JS - Auto Smooth Scroll fra Navbar og fra bunden til top

var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
	console.log(animator)
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	
}

function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

// SARA JS - Typing Text Animation (Array Loop) 

var myString = "Styleguide";
var myArray = myString.split("");
var loopTimer;
function frameLooper() {
	if(myArray.length > 0) {
		document.getElementById("automatiskTekst").innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer); 
                return false;
	}
	loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();