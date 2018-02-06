function portfolioTemplateFix() {
    var portfolioItemsCounter = document.getElementsByClassName("portfolio__item").length,
        footer = document.getElementsByClassName("portfolio__divider")[1],
        tabletWidth = 1149;

    if (portfolioItemsCounter % 4 == 3 && window.innerWidth >= tabletWidth) {
        footer.style.marginTop = "550px";
    }
}

function appendCloseMenuButton() {
    var headerMenuFirstChild = document.querySelector(".menu");
    var menuCloseButton = document.createElement("label");
    menuCloseButton.setAttribute("for", "menu");
    menuCloseButton.innerHTML = '<h1 class="menu__close-button">X</h1>';
    headerMenuFirstChild.appendChild(menuCloseButton);
}