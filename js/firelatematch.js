window.onload = function () {
    var login = document.getElementById("glogin");
    login.onclick = sign;
    var logout = document.getElementById("glogout");
    logout.onclick = signout;
    var latematch = document.getElementById("latematch");
    latematch.onclick = lateMatch;
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
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var check = 0;
            firebase.database().ref("/lateMatch/" + user.uid).on("value", function (snapshot) {
                if (snapshot.val().hostuid == user.uid) {
                    check = 1;
                }
            });
            if (check == 0) {
                alert("방만들었다");
                firebase.database().ref('/lateMatch/' + user.uid).set({
                    "hostname": user.displayName,
                    "hostemail": user.email,
                    "hostuid": user.uid,
                    "foodCategory": '한식',
                    "restaurant": '찌개찌개',
                    "maxPeople": 5,
                    time: {"sTime": '21:00', "eTime": '23:00'}
                });// 사람이 꽉차면 1 꽉안차면 0
                firebase.database().ref('/lateMatch/' + user.uid + '/member/' + user.uid).set({
                    "username": user.displayName,
                    "email": user.email
                });
            }
            else {
                alert("방은 인당 하나다");
            }
        }
    });
};


// 버튼클릭함수
function btnClick() {
    var clickbtn = this;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (j$(clickbtn).attr("make") == user.uid) {
                alert("여기 니가만든방이란다");
            }
            else {
                var something = {};
                something['/member/' + user.uid + '/email'] = user.email;
                var something2 = {};
                something2['/member/' + user.uid + '/name'] = user.displayName;
                firebase.database().ref("/lateMatch/" + j$(clickbtn).attr("make")).update(something);
                firebase.database().ref("/lateMatch/" + j$(clickbtn).attr("make")).update(something2);
                alert("참가함");
            }
        }
        else {
            alert("로그인해야 이용가능하단");
        }
    });
};

// 로그인 상황창
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
        firebase.database().ref('/onUser/' + user.uid).set({"name": user.displayName, "siteOn": 1});
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

// 버튼추가
firebase.database().ref('/lateMatch/').on('child_added', function (snapshot) {

    var btn = document.createElement("button");
    j$(btn).attr("make", snapshot.val().hostuid);
    j$(btn).text(snapshot.val().hostname);
    j$(btn).bind("click", btnClick);
    j$('#list').append(btn);
});


// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function () {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
    })
    .catch(function (err) {
        console.log('Unable to get permission to notify.', err);
    });

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken()
    .then(function (currentToken) {
        if (currentToken) {
            sendTokenToServer(currentToken);
            updateUIForPushEnabled(currentToken);
        } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            updateUIForPushPermissionRequired();
            setTokenSentToServer(false);
        }
    })
    .catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
        showToken('Error retrieving Instance ID token. ', err);
        setTokenSentToServer(false);
    });

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function () {
    messaging.getToken()
        .then(function (refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
        })
        .catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
            showToken('Unable to retrieve refreshed token ', err);
        });
});








