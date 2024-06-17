const burgerMenu = document.getElementById("burger-menu");
const overlay = document.getElementById("menu");
const body = document.body;

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  body.classList.toggle("no-scroll");
});
