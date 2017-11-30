function login(){
	var id = document.getElementById("id").value;
	var password = document.getElementById("password").value;

	if (!id){
		alert("아이디를 입력해주세요.")
		return false;
	}
	else if (!password){
		alert("비밀번호를 입력해주세요.");
		return false;
	}
	return true;
}

window.onload = function(){
	send = document.getElementById('button');
	send.onclick = login;
}