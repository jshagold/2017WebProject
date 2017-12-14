window.onload = function() {
    $("#fastbtn").bind("click", FastClick);
    $("#reservebtn").bind("click", ReserveClick);

    var foodCategory = $(".foodcategory button");
    for(var i=0; i < foodCategory.length; i++) {
        $(foodCategory[i]).bind("click", FoodClick);
    }
    
    $("#minprice").bind("change", ChangePrice);
    $("#maxprice").bind("change", ChangePrice);

    $("#meetday").bind("change", ChangeDay);
    $("#starttime").bind("change", ChangeDay);
    $("#endtime").bind("change", ChangeDay);
    
    $(".foodcategory").hide();
    $(".pricecategory").hide();
    $(".daycategory").hide();
    $("form>input").hide();
    InitMain();
    SetPrice();
};
function InitMatch() {
    InitMain();
}

function FastClick() {
    $("#fastbtn").addClass("btnclick");
    $("#reservebtn").removeClass("btnclick");
    $(".foodcategory").slideDown();
    if($("form>input").css("display") != "none") {
        $(".daycategory").slideUp();
    }
    //$(".daycategory").slideUp();
}
function ReserveClick() {
    $("#fastbtn").removeClass("btnclick");
    $("#reservebtn").addClass("btnclick");
    $(".foodcategory").slideDown();
    if($("form>input").css("display") != "none") {
        $(".daycategory").slideDown();
    }
}
function FoodClick() {
    var foodCategory = $(".foodcategory button");
    for(var i=0; i < foodCategory.length; i++) {
        $(foodCategory[i]).removeClass("btnclick");
    }
    $(this).addClass("btnclick");
    $(".pricecategory").slideDown();
}
function SetPrice() {
    var minPrice = $("#minprice");
    var maxPrice = $("#maxprice");

    for(var i=3; i <= 10; i++) {
        var minOption = document.createElement("option");
        minOption.appendChild(document.createTextNode(i * 1000));
        minPrice.append(minOption);
        var maxOption = document.createElement("option");
        maxOption.appendChild(document.createTextNode(i * 1000));
        maxPrice.append(maxOption);
    }
    var minOption = document.createElement("option");
    minOption.appendChild(document.createTextNode("상관없음"));
    minPrice.append(minOption);

    var maxOption = document.createElement("option");
    maxOption.appendChild(document.createTextNode("상관없음"));
    maxPrice.append(maxOption);
}

function ChangePrice() {
    $(this).find(":first-child").remove();
    var minPrice = $("#minprice").find(":first-child").text();
    var maxPrice = $("#maxprice").find(":first-child").text();

    if(minPrice == 3000 && maxPrice == 3000) {
        if($("#reservebtn").hasClass("btnclick")) {
            $(".daycategory").slideDown();
        }
        $("form>input").slideDown();
    }
}

function ChangeDay() {
    //console.log($("#meetday").value);
}