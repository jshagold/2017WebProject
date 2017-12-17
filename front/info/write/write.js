window.onload = function(){
	
	j$("#com-button").bind("click", Complete);

	InitAside();
};

var restaurant;
var foodCategory;
var mainMenu;
var price;
var text;

function Complete() {
	restaurant = j$("#res_name").val();
	foodCategory = j$("#menutype").val();
	mainMenu = j$("#mainmenu").val();
	price = j$("#howmuch").val();
	text = j$("#addreview").val();
}

