
window.onload = function () {

    j$("#food").bind("change", FoodClick);

    InitAside();
    InitFoodCategory();

    InitSectionList();
    FoodClick();
};

function Open() {
    if (j$(this).text() === "보기") {
        j$(this).text("참가");
        j$(this).parent().parent().children(".main").stop().slideDown();
    }
    else if (j$(this).text() === "참가") {
        JoinSection(j$(this).parent().parent().attr("secID"));
    }
}

function Close() {
    j$(this).parent().stop().slideUp();
    j$(this).parent().parent().
        children(".mini").children("button").text("보기");
}

function JoinSection(sectionID) {
    //참가 누를시 처리
    //console.log(sectionID);
}

var foodCategoryArr = new Array();
var foodCategory;
var sectionArrs = new Array();

function InitFoodCategory() {
    foodCategoryArr.push("무관");
    foodCategoryArr.push("한식");
    foodCategoryArr.push("중식");
    foodCategoryArr.push("일식");

    var foodSelect = j$("#food");
    for (var i = 0; i < foodCategoryArr.length; i++) {
        var newOption = document.createElement("option");
        newOption.appendChild(
            document.createTextNode(foodCategoryArr[i]));
        foodSelect.append(newOption);
    }
}

function FoodClick() {
    foodCategory = j$("#food").val();

    ClearSection();
    for(var i=0; i<sectionArrs.length; i++) {
        if(foodCategory == "무관") {
            MakeSection(sectionArrs[i].food, sectionArrs[i].res,
                sectionArrs[i].nowp, sectionArrs[i].maxp,
                sectionArrs[i].meetday, sectionArrs[i].stime,
                sectionArrs[i].etime, sectionArrs[i].one,
                sectionArrs[i].secid);
        }else {
            if(sectionArrs[i].food === foodCategory) {
                MakeSection(sectionArrs[i].food, sectionArrs[i].res,
                    sectionArrs[i].nowp, sectionArrs[i].maxp,
                    sectionArrs[i].meetday, sectionArrs[i].stime,
                    sectionArrs[i].etime, sectionArrs[i].one,
                    sectionArrs[i].secid);
            }
        }
    }
}

function PushSectionArrs(ifood, ires, inowp, imaxp,
    imeetday, istime, ietime, ione, isecid) {
    sectionArrs.push(
        {
            food: ifood, res: ires, nowp: inowp, maxp: imaxp,
            meetday: imeetday, stime: istime, etime: ietime,
            one: ione, secid: isecid
        }
    );
}

//이 부분에서 서버로부터 방정보 값 얻어와서 위 함수 호출하면 됩니다.
function InitSectionList() {
    PushSectionArrs("한식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 12121212);
    PushSectionArrs("중식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 24555);
    PushSectionArrs("일식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 12365432);
    PushSectionArrs("분식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 12145);
    PushSectionArrs("한식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 146666);
    PushSectionArrs("중식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", "hello kang 1", 222222);
}

function ClearSection() {
    var sections = j$("section");
    for(var i=0; i < sections.length; i++) {
        j$(sections[i]).remove();
    }
}

function MakeSection(food, restaurant,
    nowPeople, maxPeople, meetDay, meetSTime, meetETime, oneText,
    sectionID) {
    var listView = j$(".listview");

    var newSection = document.createElement("section");
    j$(newSection).attr("secID", sectionID);
    var mini = document.createElement("div");
    var main = document.createElement("div");
    j$(mini).addClass("mini");
    j$(main).addClass("main");

    var minidiv = document.createElement("div");
    var minih2 = document.createElement("h2");
    var minih3 = document.createElement("h3");
    var minibtn = document.createElement("button");
    j$(minibtn).text("보기");

    var mainh2 = document.createElement("h2");
    var mainbtn = document.createElement("button");
    j$(mainbtn).text("닫기");

    j$(minih2).text(food + " : " +
        restaurant + " (" + nowPeople + "/" +
        maxPeople + ")");
    j$(minih3).text(meetDay + " " + meetSTime + " ~ " + meetETime);
    j$(mainh2).text(oneText);

    j$(minidiv).append(minih2);
    j$(minidiv).append(minih3);
    j$(mini).append(minidiv);
    j$(mini).append(minibtn);

    j$(main).append(mainh2);
    j$(main).append(mainbtn);
    j$(main).hide();

    j$(minibtn).bind("click", Open);
    j$(mainbtn).bind("click", Close);

    j$(newSection).append(mini);
    j$(newSection).append(main);

    j$(listView).append(newSection);
}