const btnNavbar = document.querySelector(".header-hamburger");
const btn = document.querySelector(".header-nav-bar");
btnNavbar.onclick = function () {
  const navbar = document.querySelector(".header-nav-bar");
  navbar.classList.toggle("active");
  btn.onclick = function () {
    navbar.classList.toggle("active");
  }
};


