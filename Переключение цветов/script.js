document.getElementById("btn__box1").onclick = colorBoxOne;
function colorBoxOne(event) {
	document.getElementById("box1").style.backgroundColor = "orange";
};

document.getElementById("btn__box2").onclick = colorBoxTwo;
function colorBoxTwo(event) {
	document.getElementById("box2").style.backgroundColor = "yellow";
};

document.getElementById("btn__box3").onclick = colorBoxThree;
function colorBoxThree(event) {
	document.getElementById("box3").style.backgroundColor = "purple";
};

document.getElementById("btn__box4").onclick = colorBoxFour;
function colorBoxFour(event) {
	document.getElementById("box4").style.backgroundColor = "green";
};

document.getElementById("reset__btn").onclick = resetColor;
function resetColor(event) {
	document.getElementById("box1").style.backgroundColor = "#e6edd5";
	document.getElementById("box2").style.backgroundColor = "#e6edd5";
	document.getElementById("box3").style.backgroundColor = "#e6edd5";
	document.getElementById("box4").style.backgroundColor = "#e6edd5";
}


