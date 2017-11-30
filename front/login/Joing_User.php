<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
xmlns="http://www.w3.org/1999/html">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>그 밥 사</title>
    <link href="./css/joing_user.css" type="text/css" rel="stylesheet"/>
    <link href="../css/bootstrap.css" type="text/css" rel="stylesheet"/>
    <script src = "../js/Joing_User.js" type="text/javascript"></script> <!--js file-->
</head>
<body> 
    <header>

        <a href="./login.html"><img src="../image/포기하면편해.png"> </a><!--code-->
    </header>


    <article>
        <h1>회원가입</h1>
        <form action="../main.php" method="post">
            <div class="form-group">email : <input class="form-control" id = "jEmail" name="J_eamil" type="email"/><!--<button>인증</button> JS 버튼 --></div>
            <!--<div class="form-group"><input class="form-control" name="number"/>&lt;!&ndash;인증버튼을 누를 시 보여주기&ndash;&gt;</div>-->
            <div class="form-group">password : <input class="form-control" id = "jPassword" name="J_password" type = "password"/></div>
            <div class="form-group">password 확인 : <input class="form-control" id = "rePassword" name="re_password" type = "password"/></div>
            <div class="form-group">닉네임 : <input class="form-control" id = "nickName" name="Nickname" type = "text"/></div>
            <input type="submit" id = "send" value="가입"/>
           
      
        </form>
    </article>


    <footer>

    </footer>
</body>
</html>