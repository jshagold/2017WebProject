
var userImage;
var userName;
var userEmail;
var userInfo=null;

window.onload = function () {
	j$("#asidebtn").bind("click", ToggleAisde);
	//$("#asidebtn").bind("mouseenter", toggleAisde);
	InitUserInfo();
	j$("aside a").bind("click",signout);
};

function InitAside() {
	j$("#asidebtn").bind("click", ToggleAisde);

	j$("aside a").bind("click",signout);

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
	var userstatus = firebase.auth().currentUser;

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
		userInfo = user.uid;
		userName = user.displayName;
		//console.log(userInfo);
        // userinfo 보여주기
        j$('#username').text(user.displayName);
        j$('#useremail').text(user.email);
        j$('#userimage').attr("src", user.photoURL);
        // db업데이트
        // 데이터바뀔때 리스너
        
   		}
	});
	
}
function signout(){
    firebase.auth().signOut().then(function(){
    }, function (error) {
        alert(error, message);
    });
}