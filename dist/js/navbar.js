const $NAV_MENU = document.querySelector(".nav-menu");
const $ICON_MENU = document.querySelector(".icon-menu");
const $NAV_UL = document.querySelector(".nav-ul");

let visibleNavUl = false;

const isVisibleNavUl = () => {
    if (visibleNavUl === false) {
        $NAV_UL.classList.add("nav-ul--visible");
        $ICON_MENU.src = "src/images/icons/close-white.png";
        visibleNavUl = true;
    } else {
        $NAV_UL.classList.remove("nav-ul--visible");
        $ICON_MENU.src = "src/images/icons/menu-white.png";
        visibleNavUl = false;
    }
};

$NAV_MENU.addEventListener("click", isVisibleNavUl);