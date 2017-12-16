<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./css/bootstrap.css" type="text/css" rel="stylesheet" />
    <link href="./css/form.css" type="text/css" rel="stylesheet" />
    <link href="./css/main.css" type="text/css" rel="stylesheet" />
    <script src="./js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="./js/bootstrap.js"></script>
    <script src="./js/form.js" type="text/javascript"></script>
    <script src="./js/main.js" type="text/javascript"></script>
    <title>그 밥 사</title>
</head>

<body>
    <?php
        $host = 'localhost:3307';
        $db = new PDO("mysql:host=$host;dbname=webproject;", "root", "root");
        $rows= $db->query("$query");
        ?>

    <header>
        <img src="./image/menu_icon.png" id="asidebtn" />
        <a href="./main.html">
            <img src="./image/maintitle3.png">
        </a>
    </header>

    <aside>
        <a href="./match_view/match.html">매칭</a>
        <a href="./info/menu/info_menu.html">음식점정보</a>
        <a href="./login/login.html">로그인</a>
    </aside>

    <article>
        <section><span class="middlespan">매칭</span></section>
        <div class="match">
            <form action="#">
                <div>
                    항목 체크
                </div>

                <div>
                    매칭종류
                    <br>
                    <input type="radio" name="match" value="fast" />빠른매칭
                    <input type="radio" name="match" value="late" />나중매칭
                </div>

                <div>
                    음식종류
                    <br>
                    <input type="radio" name="food" value="Korean" />한식
                </div>

                <!-- 음식종류 하위태그 -->

                <div>
                    음식점
                    <br>
                    <input type="checkbox" name="restaurant" value="Korean" />알촌
                    <input type="checkbox" name="restaurant" value="Japanese" />찌개찌개
                    <input type="checkbox" name="restaurant" value="Chinese" /> 와부대
                </div>

                <div>
                    가격
                    <br>
                    <input type="checkbox" name="cost" value="1000" />1000
                    <input type="checkbox" name="cost" value="2000" />2000
                    <input type="checkbox" name="cost" value="3000" />3000
                </div>

                <div>
                    시간
                    <br>
                    <input type="checkbox" name="time" value="1pm" />1pm
                    <input type="checkbox" name="time" value="2pm" />2pm
                    <input type="checkbox" name="time" value="3pm" />3pm
                </div>

                <input type="submit" name="create" />
            </form>
        </div>
        <a href="./match_view/matchlist.html">
            <section><span class="middlespan">대기줄</span></section>
        </a>
        <section><span class="middlespan">정보</span></section>
        <div class="info">
            <a href="./info/menu/read/read.html"><section>인증 정보</section></a>
            <a href="./info/menu/read/read.html"><section>비인증 정보</section></a>
        </div>
    </article>
</body>

</html>