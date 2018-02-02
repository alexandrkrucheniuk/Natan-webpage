var portfolioItemsCounter = document.getElementsByClassName("portfolio__item").length,
	footer = document.getElementsByClassName("portfolio__divider")[1],
	tabletWidth = 768;

if (portfolioItemsCounter % 4 == 3 && window.innerWidth >= tabletWidth) {
	footer.style.marginTop = "550px";
}