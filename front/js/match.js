window.onload = function() {
    j$("#fastbtn").bind("click", FastClick);
    j$("#reservebtn").bind("click", ReserveClick);

    j$("#food").bind("change", FoodClick);
    j$("#res").bind("change", ResClick);
    j$("#maxpeople").bind("change", People);

    j$("#meetday").val(new Date().toISOString().slice(0,10));
    
    var starthour = new Date().getHours()+1;
    var endhour = starthour + 1;
    if(starthour == 24) {
        starthour = 0;
    }
    if(endhour == 24) {
        endhour = 0;
    }
    if(starthour < 10) {
        j$("#starttime").val("0"+starthour.toString()+":00");
    }
    else {
        j$("#starttime").val(starthour.toString()+":00");
    }
    if(endhour < 10) {
        j$("#endtime").val("0"+endhour.toString()+":00");
    }
    else {
        j$("#endtime").val(endhour.toString()+":00");
    }
    
    j$("form>input").bind("click", MatchClick);
    //$("form>input").attr("disabled", false);

    j$(".foodcategory").hide();
    j$(".peocategory").hide();
    j$(".rescategory").hide();
    j$(".daycategory").hide();
    j$(".textcategory").hide();
    j$("form>input").hide();
    InitMain();
    SetPeople();
};
function InitMatch() {
    InitMain();
}

function FastClick() {
    j$("#fastbtn").addClass("btnclick");
    j$("#reservebtn").removeClass("btnclick");
    j$(".foodcategory").slideDown();
    if(j$(".daycategory").css("display") != "none") {
        j$(".daycategory").slideUp();
        j$(".textcategory").slideUp();
    }
    //$(".daycategory").slideUp();
}
function ReserveClick() {
    j$("#fastbtn").removeClass("btnclick");
    j$("#reservebtn").addClass("btnclick");
    j$(".foodcategory").slideDown();
    if(j$("form>input").css("display") != "none") {
        j$(".daycategory").slideDown();
        j$(".textcategory").slideDown();
    }
}
function FoodClick() {
    if(j$(this).find(":first-child").text() === "선택해주세요") {
        j$(this).find(":first-child").remove();
    }
    j$(".rescategory").slideDown();
}
function ResClick() {
    if(j$(this).find(":first-child").text() === "선택해주세요") {
        j$(this).find(":first-child").remove();
    }
    j$(".peocategory").slideDown();
}
function SetPeople() {
    var maxPeoples = j$("#maxpeople");

    for(var i=2; i <= 6; i++) {
        var maxOption = document.createElement("option");
        maxOption.appendChild(document.createTextNode(i));
        maxPeoples.append(maxOption);
    }
}

function People() {
    if(j$(this).find(":first-child").text() === "선택해주세요") {
        j$(this).find(":first-child").remove();
    }

    var maxPeoples = j$("#maxpeople").find(":first-child").text();

    if(maxPeoples == 2) {
        if(j$("#reservebtn").hasClass("btnclick")) {
            j$(".daycategory").slideDown();
            j$(".textcategory").slideDown();
        }
        j$("form>input").slideDown();
    }
}

var maxPeople;
var restaurant;
var foodCategory;
var meetDay;
var meetSTime;
var meetETime;
var oneText;

function MatchClick() {
    foodCategory = j$("#food").val();
    restaurant = j$("#res").val();
    maxPeople = j$("#maxpeople").val();
    meetDay = j$("#meetday").val();
    meetSTime = j$("#starttime").val();
    meetETime = j$("#endtime").val();
    oneText = j$("#text").val();

    /*console.log(foodCategory);
    console.log(restaurant);
    console.log(maxPeople);
    console.log(meetDay);
    console.log(meetSTime);
    console.log(meetETime);
    console.log(oneText);*/
}