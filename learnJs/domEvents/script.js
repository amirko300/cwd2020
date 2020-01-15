var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll("ul button");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete me"));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	div.appendChild(li);
	div.appendChild(button);
	button.addEventListener("click", delLiByButt);
	li.addEventListener("click", addDecoration);
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
	event.target.parentElement.parentElement.removeChild(event.target.parentElement);
	// event.target.parentElement.removeChild(event.target.parentElement.children[0]);
	// event.target.parentElement.removeChild(event.target.parentElement.children[0]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function (item) {
	item.addEventListener("click", addDecoration);
});

deleteButtons.forEach(function (item) {
	item.addEventListener("click", delLiByButt);
});


