window.onload = function () {
	$("#asidebtn").bind("click", ToggleAisde);
	//$("#asidebtn").bind("mouseenter", toggleAisde);
};

function InitAside() {
	$("#asidebtn").bind("click", ToggleAisde);
}

function ToggleAisde() {
	$("aside").toggleClass("openaside");
	if ($("aside").hasClass("openaside") === false) {
		$("article").unbind("click", ToggleAisde);
		$("article").stop().animate({
			opacity: '1.0'
		}, 500);
		//$("article").unbind("mouseenter", toggleAisde);
	}
	else {
		$("article").bind("click", ToggleAisde);
		$("article").stop().animate({
			opacity: '0.5'
		}, 500);
		//$("article").bind("mouseenter", toggleAisde);
	}
}