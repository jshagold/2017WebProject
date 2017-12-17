window.onload = function () {
	j$("#asidebtn").bind("click", ToggleAisde);
	//$("#asidebtn").bind("mouseenter", toggleAisde);
};

function InitAside() {
	j$("#asidebtn").bind("click", ToggleAisde);
}

function ToggleAisde() {
	j$("aside").toggleClass("openaside");
	if (j$("aside").hasClass("openaside") === false) {
		j$("article").unbind("click", ToggleAisde);
		j$("article").stop().animate({
			opacity: '1.0'
		}, 500);
		//$("article").unbind("mouseenter", toggleAisde);
	}
	else {
		j$("article").bind("click", ToggleAisde);
		j$("article").stop().animate({
			opacity: '0.5'
		}, 500);
		//$("article").bind("mouseenter", toggleAisde);
	}
}