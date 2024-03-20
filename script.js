// chnage header bg color on hover 
window.onscroll = function () {
 myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
 if (window.pageYOffset > sticky) {
  header.classList.add("bg");
 } else {
  header.classList.remove("bg");
 }
}
