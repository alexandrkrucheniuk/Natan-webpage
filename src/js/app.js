var portfolioItemsCounter = document.getElementsByClassName("portfolio__item").length;
var footer = document.getElementsByClassName("portfolio__divider")[1];

if (portfolioItemsCounter % 4 == 3) {
	footer.style.marginTop = "550px";
}