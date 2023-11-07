const menuHambuge = document.querySelector(".menu-hamburger");
const headerMenu = document.querySelector(".menu-list");
const teste = document.querySelector(".dropdown-open");
const dropdown = document.querySelector(".item-list-dropdown");

teste.addEventListener("click", () => {
    dropdown.classList.toggle("open-dropdown");

    if(window.innerWidth < 992) {
        if (dropdown.classList.contains("open-dropdown")) {
            headerMenu.style.height = "380px";
        } else {
            headerMenu.style.height = "";
        } 
    }

});

menuHambuge.addEventListener("click", () => {
    menuHambuge.classList.toggle("menu-hamburger-close");
    headerMenu.classList.toggle("menu-mobile");
    dropdown.classList.remove("open-dropdown");
});

window.addEventListener("resize", function (event) {
    if (window.innerWidth > 992) {
        headerMenu.classList.remove("menu-mobile");
        menuHambuge.classList.remove("menu-hamburger-close");
    }
});