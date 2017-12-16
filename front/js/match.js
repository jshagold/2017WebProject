window.onload = function() {
    $("#fastbtn").bind("click", FastClick);
    $("#reservebtn").bind("click", ReserveClick);

    var foodCategory = $(".foodcategory button");
    for(var i=0; i < foodCategory.length; i++) {
        $(foodCategory[i]).bind("click", FoodClick);
    }
    
    $("#maxpeople").bind("change", PeoplePlace);
    $("#place").bind("change", PeoplePlace);

    $("#meetday").bind("change", ChangeDay);
    $("#starttime").bind("change", ChangeDay);
    $("#endtime").bind("change", ChangeDay);
    $("#meetday").val(new Date().toISOString().slice(0,10));

    $("form>input").bind("click", MatchClick);
    //$("form>input").attr("disabled", false);

    $(".foodcategory").hide();
    $(".peoplacategory").hide();
    $(".rescategory").hide();
    $(".daycategory").hide();
    $("form>input").hide();
    InitMain();
    SetPeoPla();
};
function InitMatch() {
    InitMain();
}

function FastClick() {
    $("#fastbtn").addClass("btnclick");
    $("#reservebtn").removeClass("btnclick");
    $(".foodcategory").slideDown();
    if($(".daycategory").css("display") != "none") {
        $(".daycategory").slideUp();
        $("form>input").slideDown();
    }
    //$(".daycategory").slideUp();
}
function ReserveClick() {
    $("#fastbtn").removeClass("btnclick");
    $("#reservebtn").addClass("btnclick");
    $(".foodcategory").slideDown();
    if($("form>input").css("display") != "none") {
        $(".daycategory").slideDown();
        $("form>input").slideUp();
        ChangeDay();
    }
}
function FoodClick() {
    var foodCategory = $(".foodcategory button");
    for(var i=0; i < foodCategory.length; i++) {
        $(foodCategory[i]).removeClass("btnclick");
    }
    $(this).addClass("btnclick");
    $(".peoplacategory").slideDown();
}
function SetPeoPla() {
    var maxPeople = $("#maxpeople");
    var place = $("#place");

    for(var i=2; i <= 6; i++) {
        var maxOption = document.createElement("option");
        maxOption.appendChild(document.createTextNode(i));
        maxPeople.append(maxOption);
    }
    var maxOption = document.createElement("option");
    maxOption.appendChild(document.createTextNode("상관없음"));
    maxPeople.append(maxOption);
}

function PeoplePlace() {
    if($(this).find(":first-child").text() === "최대인원선택" || 
        $(this).find(":first-child").text() === "장소선택" ) {
        $(this).find(":first-child").remove();
    }

    var maxPeople = $("#maxpeople").find(":first-child").text();
    var place = $("#place").find(":first-child").text();

    if(maxPeople == 2 && place === "학교앞") {
        if($("#reservebtn").hasClass("btnclick")) {
            $(".daycategory").slideDown();
        }
        else {
            $("form>input").slideDown();
        }
        $(".rescategory").slideDown();
    }
}

function ChangeDay() {
    if(!$("#starttime").val() == "" && 
        !$("#endtime").val() == "" ) {
            $("form>input").slideDown();
        }
}

function MatchClick() {
    if($("#minprice").val() > $("#maxprice").val() || 
        $("#starttime").val() > $("#endtime").val()) {
            
        }
}