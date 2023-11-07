const menuHambuge = document.querySelector(".header-menu-hamburger");
const headerMenu = document.querySelector(".header-menu");

menuHambuge.addEventListener("click", () => {
    menuHambuge.classList.toggle("menu-hamburger-close");
    headerMenu.classList.toggle("menu-mobile");
})