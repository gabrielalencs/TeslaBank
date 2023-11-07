const buttonMenuHamburger = document.querySelector(".menu-hamburger");
const containerHeaderList = document.querySelector(".menu-list");
const itemDropdownOpen = document.querySelector(".dropdown-open");
const containerDropdown = document.querySelector(".item-list-dropdown");

// open and close mobile menu dropdown menu

itemDropdownOpen.addEventListener("click", openMenuDropdown);

function openMenuDropdown() {
    containerDropdown.classList.toggle("open-dropdown");

    if(window.innerWidth < 992) {
        if (containerDropdown.classList.contains("open-dropdown")) {
            containerHeaderList.style.height = "380px";

        } else {
            containerHeaderList.style.height = "";
        } 
    }
}

// open mobile menu

buttonMenuHamburger.addEventListener("click", openMenuMobile);

function openMenuMobile() {
    buttonMenuHamburger.classList.toggle("menu-hamburger-close");
    containerHeaderList.classList.toggle("menu-mobile");

    containerDropdown.classList.remove("open-dropdown");

    containerHeaderList.style.height = "";
}


window.addEventListener("resize", function (event) {
    if (window.innerWidth > 992) {
        containerHeaderList.classList.remove("menu-mobile");
        buttonMenuHamburger.classList.remove("menu-hamburger-close");
    }
});