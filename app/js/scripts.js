const buttonMenuHamburger = document.querySelector(".menu-hamburger");
const containerHeaderList = document.querySelector(".menu-list");
const itemDropdownOpen = document.querySelector(".dropdown-open");
const containerDropdown = document.querySelector(".item-list-dropdown");
const headerContainer = document.querySelector(".header");
const itensMenuLink = document.querySelectorAll(".menu-list .item-link");

itensMenuLink.forEach((itemLink) => {
    itemLink.addEventListener("click", (event) => {
        event.preventDefault();
    });
});


window.addEventListener("scroll", changeHeaderColorsScroll);

function changeHeaderColorsScroll() {
    const headerLogo = this.document.querySelector(".header-logo");
    const itensMenu = this.document.querySelectorAll(".menu-list .item-link");
    const headerButtonEnter = this.document.querySelector(".header-buttons .buttons-item-1");
    const headerButtonOpenAccount = this.document.querySelector(".header-buttons .buttons-item-2");
    const headerLinesButtonHamburger = this.document.querySelectorAll(".menu-hamburger .hamburger-line");


    if (window.scrollY > 0) {
        headerContainer.classList.add('header-scroll');

        headerLogo.classList.add("header-logo-scroll");

        itensMenu.forEach((itemMenu) => {
            itemMenu.classList.add("item-link-scroll");
        });

        headerButtonEnter.classList.add("buttons-item-1-scroll");

        headerButtonOpenAccount.classList.add("buttons-item-2-scroll");

        headerLinesButtonHamburger.forEach((lineButton) => {
            lineButton.classList.add("hamburger-line-scroll");
        });

    }
    else {
        headerContainer.classList.remove('header-scroll');

        headerLogo.classList.remove("header-logo-scroll");

        itensMenu.forEach((itemMenu) => {
            itemMenu.classList.remove("item-link-scroll");
        });

        headerButtonEnter.classList.remove("buttons-item-1-scroll");

        headerButtonOpenAccount.classList.remove("buttons-item-2-scroll");

        headerLinesButtonHamburger.forEach((lineButton) => {
            lineButton.classList.remove("hamburger-line-scroll");
        });
    }
}


// open and close mobile menu dropdown menu

itemDropdownOpen.addEventListener("click", openMenuDropdown);

function openMenuDropdown() {
    containerDropdown.classList.toggle("open-dropdown");

    if (window.innerWidth < 992) {
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