
var userImage;
var userName;
var userEmail;

window.onload = function () {
	j$("#asidebtn").bind("click", ToggleAisde);
	//$("#asidebtn").bind("mouseenter", toggleAisde);

	InitUserInfo();
};

function InitAside() {
	j$("#asidebtn").bind("click", ToggleAisde);

	InitUserInfo();
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

function InitUserInfo() {
	userImage = "./image/maintitle3.png";
	userName = "강동혁";
	userEmail = "kdh950812@nate.com"

	j$("#userimage").attr("src", userImage);
	j$("#username").text(userName);
	j$("#useremail").text(userEmail);
}