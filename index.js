
let showMenu = false;
const navAction = document.querySelector(".nav-action");
console.log('navAction: ', navAction);
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

navAction.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    menuToggle.innerHTML = showMenu ? `<div class="bar"></div><div class="bar"></div><div class="bar"></div>` : `<div><i>X</i></div>`;
    showMenu = !showMenu;
});
