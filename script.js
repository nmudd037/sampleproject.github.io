var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textColor = document.querySelector(".textcolor");
var randomColorGenerator = document.getElementById("randomgen");

setGradient();

function setTextColor() {
	body.style.color = textColor.value;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    body.style.backgroundAttachment = "fixed";


	css.textContent = body.style.background + ";";
}

function randomColor() {
  var hex = "#" + Math.floor(Math.random()*16777216).toString(16);  
    return hex
}


// It is basically math.

// We have 256 different variations for red, green and blue.

// By calculating the total number of these three color values we end up getting 16777216 (256*256*256).

// We calculate with 256 because each value can have a value between 0 and 255.

// Because we want to get possible values only (256^3=16777216 is not within the range anymore), we use it -1

// Math.random returns you floating numbers between 0 and 1. Keep in mind that you have to muliplicate it with the max possible value in order to get full numbers by using Math.floor.

// toString(16) will create a hex value of it.






function generateRandomColorButton() {
  color1.value = randomColor();
  color2.value = randomColor();

  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

textColor.addEventListener("input", setTextColor);

randomColorGenerator.addEventListener("click", generateRandomColorButton);
