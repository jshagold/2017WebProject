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
function PushSectionArrs(ires, ifood, imenu, iprice, itext) {
    sectionArrs.push(
        {
			res: ires, food: ifood, menu: imenu, price: iprice,
			text: itext
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
	PushSectionArrs("월수금", "한식", "김치찌개", 6000, "매우 맛있습니다.");
	PushSectionArrs("행짬", "중식", "짜장면", 2500, "돈없는 학생 추천.");
	PushSectionArrs("취해", "일식", "취해정식", 6000, "맛있고 싱싱한.....");
	PushSectionArrs("엽기떡볶이", "분식", "떡볶이", 14000, "매우 맵다.......");
	PushSectionArrs("명태찌개", "한식", "내장탕", 14000, "매우 꿀 맛.......");
	PushSectionArrs("최준호", "사람", "뭘까용?", -10000, "먹으면 10000원 증정!!");

}

function InitSection() {
	ClearSection();
	for(var i=0; i<sectionArrs.length; i++) {
		var sec = sectionArrs[i];
		MakeInfo(sec.res, sec.food, 
			sec.menu, sec.price, sec.text);
	}
}

function MakeInfo(res, food, menu, price, text) {
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
		section2.appendChild(p);
		section2.className="list-group-item panel";
		section2.style.display = "none";
		section2.style.margin = "0px";
		var art = document.getElementById("a");
		art.appendChild(section2);

		j$(section).bind("click", SlideToggle);
}