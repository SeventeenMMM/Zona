var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
var body = document.body;

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  body.classList.toggle("no-scroll");
});
