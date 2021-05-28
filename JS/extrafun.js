// Sara JS - Auto Smooth Scroll fra Navbar og fra bunden til top

var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
	// if statement der kører hvis nuværende postion på siden er mindre end den ønskede position - den distance som vi vælger at hoppe pr animation
		if(currentY < targetY-distance){
			// ScrollY er den næste position man ønsker at hoppe til i den næste "frame" i animationen 
		    scrollY = currentY+distance;
			// funktionen der tillader at vi hopper i vinduet. 
		    window.scroll(0, scrollY);
			// else kører hvis det sted jeg er på siden er "større" eller = det sted jeg ønsker at hoppe hen
	    } else {
		    clearTimeout(animator);
	    }
	
}
// forbundet med en onmousedown i HTML filen
//
function resetScroller(el){
	var currentY = window.pageYOffset;
	// hiver fat i elementet i HTML filen, og viser specifik via offsetTop hvor den er på siden
    var targetY = document.getElementById(el).offsetTop;
	// Den der styre at det bliver kørt igen og igen indtil man er på positionen
	// Den der gør animationen kan køre
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	// if statement der kører hvis nuværende position på siden er størrer end den ønskede position
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

// SARA JS - Typing Text Animation (Array Loop) 

// Den tekst der skal "skrives"
var myString = "Styleguide";
// .split metoden tager en string og deler den op i et Array - her bliver den derfor [S, t, y, l, e, g, u, i, d, e].
var myArray = myString.split("");
var loopTimer;
function frameLooper() {
	// hvis længden på array er længere end 0 - altså hvis der er nogle værdi i myArray så skal den køre if statement
	if(myArray.length > 0) {
		// viser i consolen hvordan myArray ser ud på "nuværende" tidspunkt
		for (var i = 0; i < myArray.length; i++){
			console.log(myArray);
			} 
		// .innerHTML = tillader at tilføje til elementet i HTML'en 
		// .shift = tager det første element i et array og når det er brugt sletter det fra Arrayet.
		// += = Operator ligger noget til en eksiterende value (x = x+y /x=1+1 / x = 2+1 )
		document.getElementById("automatiskTekst").innerHTML += myArray.shift();
	
	} else {
		clearTimeout(loopTimer); 
		// stopper funktionen så den ikke kører ned og kører looptimer
            return false;
	}
	// hvor hurtig den skal tilføje de nye bogstaver
	loopTimer = setTimeout('frameLooper()',70);
}
frameLooper();