<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>그 밥 사</title>
    <link href="../css/bootstrap.css" type="text/css" rel="stylesheet"/>
    <link href="./css/login.css" type="text/css" rel="stylesheet"/>
    <script src = "../js/login.js" type="text/javascript"></script>
</head>
<body>
    <header>  <!--위에 공간-->
        <a href="./login.php"></a><!--code-->
    </header>
    <article>
        <div id="main"><h1>LOG IN</h1><!--asdfghgfdsa-->


            <form action="../main.php" method="post">

                <button class="btn btn-primary back" type = "submit" id = 'button'>로그인</button>
                <div class="form-group">이메일 <input class="form-control impor" type="email" id = "id" name= "email"/></div>
                <div class="form-group">비밀번호 <input class="form-control impor" type="password" id = "password" name="password"/></div>

              
             

        </form>
        <a href="Joing_User.php">회원가입</a>
        <a href="Find_email.php">password 찾기</a></div>

    </article>


    <footer><!--밑에 공간-->
        <!--code-->
    </footer>

</body>
</html>