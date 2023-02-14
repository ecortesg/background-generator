let hex = document.getElementById("hex");
let css = document.getElementById("css");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");
let btn = document.getElementById("randomize");

function setGradient(color1, color2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ ", " 
	+ color2 
	+ ")";

	hex.textContent = color1 + " | " + color2;
	css.textContent = "background: " + body.style.background + ";";
}

function randomColor() {
	let letters = "0123456789abcdef";
	let color = "#";

	for (let i=0; i < 6; i++) {
		color += letters[(Math.floor(Math.random() * 16))];
	}

	return color;
}

color1.addEventListener("input", function() {
	setGradient(color1.value, color2.value)
});

color2.addEventListener("input", function() {
	setGradient(color1.value, color2.value)
});

btn.addEventListener("click", function(){
	let randomColor1 = randomColor();
	let randomColor2 = randomColor();
	setGradient(randomColor1, randomColor2);
	color1.value = randomColor1;
	color2.value = randomColor2;
});