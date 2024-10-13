const select = document.querySelector("select");

select.addEventListener("change", () => {
    if (select.value == 5) {
        price.textContent = select.value * 9 * 0.95 + "€";
    } else if (select.value == 10) {
        price.textContent = select.value * 9 * 0.9 + ".00€";
    } else {
        price.textContent = select.value * 9 + ".00€";
    }
});

heart.addEventListener("click", () => {
    if (heart.style.color == "red") {
        heart.style.color = "grey";
    } else {
        heart.style.color = "red";
    }
});


var toutesLesEtoiles = $('.stars .star');

toutesLesEtoiles.click(onStarClick);



function onStarClick(event) {

	var etoileCliquée = $(this);
	
	var indexCliqué = etoileCliquée.data("index");
	
	var parent = $(this).parent();

	
	parent.find('.star').addClass('stargrey');
	parent.find('.star').removeClass('yellow');

	
	for (var i = 0; i <= indexCliqué; i++) {

		var etoile = parent.find('.star[data-index=' + i + ']');
		
		etoile.addClass('yellow');
		etoile.removeClass('stargrey');
	}
}