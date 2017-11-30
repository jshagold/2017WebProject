window.onload = function() {
    $("section:first-child").bind("click", ToggleMainMenu);
    InitAside();
};

function ToggleMainMenu() {
    $(".match").toggleClass("openmatch");
    $("article section:first-child").toggleClass("closesection");
    $("article section:nth-child(3)").toggleClass("hidesection");
    $("article section:last-child").toggleClass("hidesection");
}