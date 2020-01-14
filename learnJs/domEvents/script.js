var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll("button");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDecoration(event) {
	event.target.classList.toggle("done");
}

function delLiByButt(event) {
	console.log("delLiByButt");
	console.log(event.target.parentNode);
	event.target.parentNode.removeChild(event.target);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function (item) {
	item.addEventListener("click", addDecoration);
});

deleteButtons.forEach(function (item) {
	console.log(item);
	item.addEventListener("click", delLiByButt);
});


