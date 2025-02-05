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

// box 3

var box3 = document.querySelector(".box-3");

function changeColor() {
  box3.classList.toggle(".is-blue");
}

box3.addEventListener("click", changeColor);
