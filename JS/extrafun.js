var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	console.log(currentY)
	var targetY = document.getElementById(el).offsetTop;
	console.log(targetY)
	var bodyHeight = document.body.offsetHeight;
	console.log(bodyHeight)
	var yPos = currentY + window.innerHeight;
	console.log(yPos)
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