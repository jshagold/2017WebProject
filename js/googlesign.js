window.onload = function () {
    var login = document.getElementById("glogin");
    login.onclick = sign;
    var logout = document.getElementById("glogout");
    logout.onclick = signout;
    var latematch = document.getElementById("latematch");
    latematch.onclick = lateMatch;

    var text = j$(this);
    text.onclick = inroom;
};

function sign() {
    // 구글인증을 provider 변수에 대체
    var provider = new firebase.auth.GoogleAuthProvider();

    // provider(구글 인증) 인증으로 로그인처리
    firebase.auth().signInWithPopup(provider).then(function (result) {
    }).catch(function (error) {
        alert(error.message);
    });
}

function signout() {
    firebase.auth().signOut().then(function () {
        alert("인증이 해제되었음다");
        firebase.database().ref('/onUser/').off;

        firebase.database().ref('/onUser/' + userid + '/siteOn').set(0);
    }, function (error) {
        alert(error, message);
    });
};

// 사용자가 현재 로그인상태인지
var userstatus = firebase.auth().currentUser;

var userid = null;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userid = user.uid;
        j$('#status').text(user.displayName + "님 로그인 했다");
        j$('#status').show();
        // userinfo 보여주기
        j$('#username').text(user.displayName);
        j$('#usermail').text(user.email);
        j$('#userid').text(user.uid);
        j$('#userinfo').show();
        // db업데이트
        firebase.database().ref('/onUser/' + user.uid).set({"username": user.displayName, "siteOn": 1});
        // 데이터바뀔때 리스너
        firebase.database().ref('/onUser/').on('value', function (snapshot_users) {
            j$('#onusers').html('');
            // 유저 하나씩 읽어오기
            firebase.database().ref('/onUser/').on("child_added", function (snapshot) {
                if (snapshot.val().siteOn == 1) {
                    var li_tag = '<li>' + snapshot.val().username + '</li>';
                    j$('#onusers').append(li_tag);
                }
            });
        });
    }
    else {
        userid = null;
        j$('#status').text("인증안됨");
        j$('#status').show();
        j$('#userinfo').hide();
        userid = null;
    }
});


function pushMatching() {
    messaging.requestPermission()
        .then(function () {
            console.log('Notification permission granted.');
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...
        })
        .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
};

function lateMatch() {
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            alert("방만들었다");
            firebase.database().ref('/lateMatch/hostId/' + user.uid).set({"hostname": user.displayName});
            firebase.database().ref('/lateMatch/hostId/' + user.uid +'/member/' + user.uid).set({"username": user.displayName, "siteOn": 1});
        }
        else {
            alert("로그인하세욧");
        }
    });
};