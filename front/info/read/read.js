window.onload = function(){
	InitAside();
	for(var i = 0; i<6;i++){//현제 DB table에 있는 정보 수만큼을 실행 (php로 받아온다)
		var h1 = document.createElement("H1");
		var h2 = document.createElement("H2");
		var h3 = document.createElement("H3");
		var section = document.createElement("section");
		h1.appendChild(document.createTextNode("월수금"));
		h2.appendChild(document.createTextNode("위치: 강남"));
		h3.appendChild(document.createTextNode("주 메뉴 : 김치찌개 (6000원)"));
		section.appendChild(h1);
		section.appendChild(h2);
		section.appendChild(h3);
		section.className="list-group-item flit"+i;
		var art = document.getElementById("a");
		art.appendChild(section);

		var h1 = document.createElement("H1");
		var h2 = document.createElement("H2");
		var h3 = document.createElement("H3");
		var section2 = document.createElement("section");
		h1.appendChild(document.createTextNode("월수금"));
		h2.appendChild(document.createTextNode("위치: 강남"));
		h3.appendChild(document.createTextNode("주 메뉴 : 김치찌개 (6000원)"));
		section2.appendChild(h1);
		section2.appendChild(h2);
		section2.appendChild(h3);
		section2.className="list-group-item panel"+i;
		section2.style.display = "none";
		section2.style.margin = "0px";
		var art = document.getElementById("a");
		art.appendChild(section2);

		j$(".flit" + i).bind("click", SlideToggle);
	}

};

function SlideToggle() {
	j$($(this).next()).slideToggle("slow");
}