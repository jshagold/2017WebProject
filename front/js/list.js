window.onload = function() {
    var miniButton = j$(".mini button");
    var mainButton = j$(".main button");
    var listMain = j$(".main");

    for(var i=0; i<miniButton.length; i++) {
        j$(miniButton[i]).bind("click", Open);
        j$(mainButton[i]).bind("click", Close);
        j$(listMain[i]).hide();
    }

    InitAside();
};

function Open() {
    if(j$(this).text() === "보기") {
        j$(this).text("참가");
        j$(this).parent().parent().children(".main").stop().slideDown();
    }
    else if(j$(this).text() === "참가") {
        ////
    }
}

function Close() {
    j$(this).parent().stop().slideUp();
    j$(this).parent().parent().
        children(".mini").children("button").text("보기");
}