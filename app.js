const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "green", "brown", "pink", "yellow"];

body.style.backgroundColor = "purple";
button.addEventListener("click", changeBackGround);

function changeBackGround() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
