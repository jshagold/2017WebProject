window.onload = function(){

	InitAside();

	InitSectionArrs();
	InitSection();
};
function SlideToggle() {
	var panels = j$(".panel");
	for(var i=0; i < panels.length; i++) {
		j$(panels[i]).stop().slideUp();
	}
	j$($(this).next()).stop().slideToggle("slow");
}

var sectionArrs = new Array();
function PushSectionArrs(ires, ifood, imenu, iprice, itext, isecid) {
    sectionArrs.push(
        {
			res: ires, food: ifood, menu: imenu, price: iprice,
			text: itext, secid: isecid
        }
    );
}
function ClearSection() {
	var sections = j$("section");
	for(var i=0; i < sections.length; i++) {
		j$(sections[i]).remove();
	}
}

function InitSectionArrs() {
	//여기서 서버로부터 불러온 정보들 PushSectionArrs 호출 밑은 예시
	PushSectionArrs("월수금", "한식", "김치찌개", 6000, "매우 맛있습니다.", 12312);
	PushSectionArrs("행짬", "중식", "짜장면", 2500, "돈없는 학생 추천.", 12321);
	PushSectionArrs("취해", "일식", "취해정식", 6000, "맛있고 싱싱한.....", 123121);
	PushSectionArrs("엽기떡볶이", "분식", "떡볶이", 14000, "매우 맵다.......", 222);
	PushSectionArrs("명태찌개", "한식", "내장탕", 14000, "매우 꿀 맛.......", 111);
	PushSectionArrs("최준호", "사람", "뭘까용?", -10000, "먹으면 10000원 증정!!", 334);
}

function InitSection() {
	ClearSection();
	for(var i=0; i<sectionArrs.length; i++) {
		var sec = sectionArrs[i];
		MakeInfo(sec.res, sec.food, 
			sec.menu, sec.price, sec.text, sec.secid);
	}
}

function RecommandClick() {
	Recommand(j$(this).parent().attr("secid"));
}

function Recommand(secID) {
	//여기서 추천누를시 해당 글 ID가져옴 
	//console.log(secID);
}

function MakeInfo(res, food, menu, price, text, secid) {
	var h1 = document.createElement("H1");
		var h2 = document.createElement("H2");
		var h3 = document.createElement("H3");
		var section = document.createElement("section");
		h1.appendChild(document.createTextNode(res));
		h2.appendChild(document.createTextNode(food));
		h3.appendChild(document.createTextNode("주 메뉴 : " +
			menu + "(" + price + "원)"));
		section.appendChild(h1);
		section.appendChild(h2);
		section.appendChild(h3);
		section.className="list-group-item flit";
		var art = document.getElementById("a");
		art.appendChild(section);

		var p = document.createElement("p");
		var section2 = document.createElement("section");
		p.appendChild(document.createTextNode(text));

		var btn = document.createElement("button");
		j$(btn).text("추천");
		j$(btn).bind("click", RecommandClick);

		section2.appendChild(p);
		section2.appendChild(btn);
		section2.className="list-group-item panel";
		section2.style.display = "none";
		section2.style.margin = "0px";
		var art = document.getElementById("a");
		art.appendChild(section2);

		j$(section).bind("click", SlideToggle);
		j$(section2).attr("secid", secid)
}