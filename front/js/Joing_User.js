function checkValue(){

	var jEmail = document.getElementById("jEmail"); 
	var jPassword = document.getElementById("jPassword"); 
	var rePassword = document.getElementById("rePassword"); 
	var nickName = document.getElementById("nickName"); 
	 
	
		if(!jEmail.value) {
			alert("아이디가 입력되지 않았습니다.");
			return false;
		}
	
		else if(!jPassword.value || !rePassword.value){
			alert("비밀번호가 입력되지 않았습니다.");
			return false;
		}
		else if(!nickName.value){
			alert("닉네임을 설정해주세요.");
			return false;
		}
		else if(!(jPassword.value == rePassword.value)){
			alert("비밀번호가 일치하지 않습니다.");
			return false;
		} else {
			alert("회원가입 되었습니다!");
			return true;
		}
	}






window.onload = function(){
	var send = document.getElementById("send");
	send.onclick = checkValue;
}