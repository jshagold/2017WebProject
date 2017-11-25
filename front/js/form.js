		window.onload = function () {
			$("#asidebtn").bind("click", toggleAisde);
			//$("#asidebtn").bind("mouseenter", toggleAisde);
		};
		function toggleAisde() {
			$("aside").toggleClass("openaside");
			if ($("aside").hasClass("openaside") === false) {
				$("article").unbind("click", toggleAisde);
				$("article").stop().animate({
					opacity: '1.0'
				}, 500);
				//$("article").unbind("mouseenter", toggleAisde);
			}
			else {
				$("article").bind("click", toggleAisde);
				$("article").stop().animate({
					opacity: '0.5'
				}, 500);
				//$("article").bind("mouseenter", toggleAisde);
			}
		}.