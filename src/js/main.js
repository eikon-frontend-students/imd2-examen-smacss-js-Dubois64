// header

var header = document.querySelector(".header-box");

function changeColor() {
  header.classList.toggle(".is-yellow");
}

header.addEventListener("click", changeColor);

// box 1

var box = document.querySelector(".box-1");

function changeColor() {
  box.classList.toggle(".is-pink");
}

box.addEventListener("click", changeColor);

// box 2

var box2 = document.querySelector(".box-2");

function changeColor() {
  box2.classList.toggle(".is-blue");
}

box2.addEventListener("click", changeColor);
