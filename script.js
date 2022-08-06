let menu = document.querySelector("#icon");
let navbar = document.querySelector(".navbar");
let hiddenLinks = document.querySelector(".navbar-bottom");

menu.addEventListener("click", () => {
  hiddenLinks.classList.toggle("bottom-nav-shown");
  hiddenLinks.classList.toggle("light-gray");
  navbar.classList.toggle("light-gray");
});
window.addEventListener("scroll", function () {
  //   const scrollTop = window.scrollY;
  //   const height = sticky.offsetHeight;
  //   const offset = height / 2;
  //   let calc = 1 - (scrollTop - offset + range) / range;

  //   if (calc > 1) {
  //     navbar.style.opacity = 0;
  //   } else if (calc < 0) {
  //     navbar.style.opacity = 0.5;
  //   }

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
