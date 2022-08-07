let menu = document.querySelector("#icon");
let navbar = document.querySelector(".navbar");
let hiddenLinks = document.querySelector(".navbar-bottom");

menu.addEventListener("click", () => {
  hiddenLinks.classList.toggle("bottom-nav-shown");
  hiddenLinks.classList.toggle("light-gray");
  navbar.classList.toggle("light-gray");
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= navbar.offsetHeight) {
    navbar.style.opacity = "0.5";
  }
  if (window.scrollY >= navbar.offsetHeight * 2) {
    navbar.style.opacity = "0";
  }
  if (window.scrollY < navbar.offsetHeight) {
    navbar.style.opacity = "1";
  }
});
