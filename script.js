var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebtn = document.querySelector (".close");

function inputLength () {
  return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var removeBtn= document.createElement("button");
    removeBtn.appendChild(document.createTextNode("Delete"));
    removeBtn.className = "close";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(removeBtn);
    ul.appendChild(li);
    input.value="";

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

function doneLine(){
  if (event.target.tagName === "LI") {
    event.target.classList.toggle ("done");
  }
}

function removeItem(){
  if (event.target.className === "close") {
    event.target.parentElement.remove();
  }
}

ul.addEventListener("click", doneLine)
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
ul.addEventListener("click", removeItem)





