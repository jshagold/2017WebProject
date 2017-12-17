window.onload = function() {
    j$("article>section:first-child").bind("click", ToggleMatchMenu);
    j$("article>section:nth-child(4)").bind("click", ToggleInfoMenu);
    InitAside();
};

function InitMain() {
    j$("article>section:first-child").bind("click", ToggleMatchMenu);
    j$("article>section:nth-child(4)").bind("click", ToggleInfoMenu);
    InitAside();
}

function ToggleMatchMenu() {
    j$(".match").toggleClass("openmatch");
    j$("article>section:first-child").toggleClass("closesection");
    j$("article>a>section").toggleClass("hidesection");
    j$("article section:nth-child(4)").toggleClass("hidesection");
    j$("article section:first-child span").toggleClass("topspan");
    if(j$(".info").hasClass("openinfo")) 
    {
        j$(".info").removeClass("openinfo");
        j$("article section:nth-child(4)").removeClass("closesection");
        j$("article section:nth-child(4) span").removeClass("topspan");
    }
}

function ToggleInfoMenu() {
    j$(".info").toggleClass("openinfo");
    j$("article section:nth-child(4)").toggleClass("closesection");
    j$("article section:nth-child(4) span").toggleClass("topspan");
    //$("article section:first-child").toggleClass("smallsection");
    //$("article section:nth-child(3)").toggleClass("smallsection");
}