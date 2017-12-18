window.onload = function(){
    var login = document.getElementById("glogin");
    login.onclick = sign;
};

function sign(){
    // 구글인증을 provider 변수에 대체
    var provider = new firebase.auth.GoogleAuthProvider();

    // provider(구글 인증) 인증으로 로그인처리
    firebase.auth().signInWithPopup(provider).then(function (result) {
        location.href="./front/main.html";
    }).catch(function (error) {
        alert(error.message);
    });

}

// 사용자가 현재 로그인상태인지

