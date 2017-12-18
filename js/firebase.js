
/**
 * 초기 필드 변수 할당
 */
FirebaseChat.prototype.init = function () {
//...생략
    this.liEmailJoinSubmit = document.getElementById('liEmailJoinSubmit');
}

/**
 * 초기 이벤트 바인딩
 */
FirebaseChat.prototype.initEvent = function () {
//...생략
    this.liEmailJoinSubmit.addEventListener('click', this.createEmailUser.bind(this));
}

/**
 * 이메일로 가입 처리
 */
FirebaseChat.prototype.createEmailUser = function () {
    var userName = document.getElementById('joinUserName').value.trim();
    var email = document.getElementById('joinUserEmail').value.trim();
    var password = document.getElementById('joinPassword').value.trim();
    var rePassword = document.getElementById('joinRePassword').value.trim();
// 유효성 검증
    if (this.validateJoinForm(email, password, rePassword)) {
        var cbCreateUserWithEmail = function (user) {
            console.log('이메일 가입 성공 : ', JSON.stringify(user));
        }
        var cbAfterPersistence = function () {
            return this.auth.createUserWithEmailAndPassword(email, password)
                .then(cbCreateUserWithEmail.bind(this))
                .catch(function (error) {
                    console.error('이메일 가입시 에러 : ', error);
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            alert('이미 사용중인 이메일 입니다.');
                            break;
                        case "auth/invalid-email":
                            alert('유효하지 않은 메일입니다')
                            break;
                        case "auth/operation-not-allowed":
                            alert('이메일 가입이 중지되었습니다.')
                            break;
                        case "auth/weak-password":
                            alert("비밀번호를 6자리 이상 필요합니다");
                            break;
                    }
                });
        }
        this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(cbAfterPersistence.bind(this))
            .catch(function (error) {
                console.error('인증 상태 설정 중 에러 발생', error);
            });
    }
}

/**
 * 이메일 가입 폼에서 유효성 체크
 */
FirebaseChat.prototype.validateJoinForm = function (email, password, rePassword) {
//이메일 유효성 체크
    if (!FirebaseChat.emailCheck(email)) {
        alert("이메일 형식에 맞지 않습니다");
        return false;
    }
//패스워드 동일 여부 체크
    if (password !== rePassword) {
        alert('패스워드가 동일하지 않습니다');
        return false
    }
    return true;
}

/**
 * 이메일 형식 체크
 */
FirebaseChat.emailCheck = function (mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}
