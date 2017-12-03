window.onload = function() {
    $("article>section:first-child").bind("click", ToggleMatchMenu);
    $("article>section:nth-child(4)").bind("click", ToggleInfoMenu);
    InitAside();
};

function ToggleMatchMenu() {
    $(".match").toggleClass("openmatch");
    $("article section:first-child").toggleClass("closesection");
    $("article section:nth-child(3)").toggleClass("hidesection");
    $("article section:nth-child(4)").toggleClass("hidesection");
    $("article section:first-child span").toggleClass("topspan");
    if($(".info").hasClass("openinfo")) 
    {
        $(".info").removeClass("openinfo");
        $("article section:nth-child(4)").removeClass("closesection");
        $("article section:nth-child(4) span").removeClass("topspan");
    }
}

function ToggleInfoMenu() {
    $(".info").toggleClass("openinfo");
    $("article section:nth-child(4)").toggleClass("closesection");
    $("article section:nth-child(4) span").toggleClass("topspan");
    //$("article section:first-child").toggleClass("smallsection");
    //$("article section:nth-child(3)").toggleClass("smallsection");
}