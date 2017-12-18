
window.onload = function () {

    InitAside();

    InitSectionList();
};

function Open() {
    j$(this).parent().parent().children(".main").stop().slideToggle();
}

function JoinSection(sectionID) {
    //참가 누를시 처리
    //console.log(sectionID);
}


var sectionArrs = new Array();
var userArrs = new Array();
function LoadRoom() {
    ClearSection();
    for (var i = 0; i < sectionArrs.length; i++) {
        MakeSection(sectionArrs[i].food, sectionArrs[i].res,
            sectionArrs[i].nowp, sectionArrs[i].maxp,
            sectionArrs[i].meetday, sectionArrs[i].stime,
            sectionArrs[i].etime, sectionArrs[i].secid);
    }
}
function PushSectionArrs(ifood, ires, inowp, imaxp,
    imeetday, istime, ietime, isecid) {
    sectionArrs.push(
        {
            food: ifood, res: ires, nowp: inowp, maxp: imaxp,
            meetday: imeetday, stime: istime, etime: ietime,
            secid: isecid
        }
    );
}
function PushUserArrs(isecId, iuserName, iuserPhone) {
    if (userArrs[isecId] == undefined) {
        userArrs[isecId] = new Array();
    }
    userArrs[isecId].push({
        name: iuserName, phone: iuserPhone
    });
}

//이 부분에서 서버로부터 방정보 값 얻어와서 위 함수 호출하면 됩니다.
function InitSectionList() {
    PushSectionArrs("한식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 12121212);
    PushSectionArrs("중식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 24555);
    PushSectionArrs("일식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 12365432);
    PushSectionArrs("분식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 12145);
    PushSectionArrs("한식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 146666);
    PushSectionArrs("중식", "한우궁", 4, 5, "2017-12-10", "20:00",
        "21:00", 222222);

    PushUserArrs("12121212", "kkk", "1234");
    PushUserArrs("12121212", "ddd", "2222");
    PushUserArrs("12121212", "eee", "3333");
    PushUserArrs("12121212", "aaa", "aaa");
    PushUserArrs("12121212", "aaa", "aaa");
    PushUserArrs("12121212", "aaa", "aaa");
    PushUserArrs("12121212", "aaa", "aaa");

    LoadRoom();
}

function ClearSection() {
    var sections = j$("section");
    for (var i = 0; i < sections.length; i++) {
        j$(sections[i]).remove();
    }
}

function MakeSection(food, restaurant,
    nowPeople, maxPeople, meetDay, meetSTime, meetETime, 
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

    var mainul = document.createElement("ul");

    j$(minih2).text(food + " : " +
        restaurant + " (" + nowPeople + "/" +
        maxPeople + ")");
    j$(minih3).text(meetDay + " " + meetSTime + " ~ " + meetETime);

   // j$(mainh2).text(oneText);
    if(userArrs[sectionID.toString()] != undefined) {
        var oneText = userArrs[sectionID.toString()];
        if(oneText.constructor === Array) {
            for(var i=0; i < oneText.length; i++) {
                var newUser = document.createElement("li");
                j$(newUser).text(oneText[i].name + 
                    " : " + oneText[i].phone);
                j$(mainul).append(newUser);
                //console.log(oneText[i].name);
            }
        }
    }

    j$(minidiv).append(minih2);
    j$(minidiv).append(minih3);
    j$(mini).append(minidiv);
    j$(mini).append(minibtn);

    j$(main).append(mainul);
    j$(main).hide();

    j$(minibtn).bind("click", Open);

    j$(newSection).append(mini);
    j$(newSection).append(main);

    j$(listView).append(newSection);
}