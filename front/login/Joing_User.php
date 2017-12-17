<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
xmlns="http://www.w3.org/1999/html">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>그 밥 사</title>
    <link href="../css/bootstrap.css" type="text/css" rel="stylesheet"/>
    <link href="./css/joing_user.css" type="text/css" rel="stylesheet"/>

</head>

<?php

$fail = true;
$J_email = $_POST['J_email'];
$J_password = $_POST['J_password'];
$re_password = $_POST['re_password'];
$Nickname = $_POST['Nickname'];
$checker = $_POST['checker'];
$db_host = "localhost";
$db_user = "root";
$db_passwd = "root";
$db_name = "webproject";
$DB = mysqli_connect("$db_host","$db_user","$db_passwd","$db_name");
$sql = "select email from user where email = '$J_email'";
$sql2 = "select nick from user where nick = '$Nickname'";
$result = mysqli_query($DB,$sql);
$count = mysqli_num_rows($result);
$result2 = mysqli_query($DB,$sql2);
$count2 = mysqli_num_rows($result2);



// 비밀번호 불일치
if ($checker == 1){
    if($J_password != $re_password)
    { 
        ?>
        <script>
            alert ("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        </script>

        <?php 
        $fail = true;
    }
// 빈칸 존재

    else if(empty($J_email) || empty($J_password) || empty($re_password) || empty($Nickname)) 
    {
        ?>
        <script>
            alert ("빈칸을 모두 채워 주세요");
        </script>
        <?php
        $fail = true;
    }


// 이메일 중복
    else if($count != 0)
    {
        ?>
        <script>
            alert ("<?=$count?>");
        </script>
        <?php

    }

// 닉네임 중복
    else if($count2 != 0)
    {
        ?>
        <script>
            alert ("<?=$count2?>");
        </script>
        <?php
    }
    else {
        $fail = false;
        mysqli_query($DB,"insert into user values ('$J_email','$J_password','$Nickname',0)");

    }
    mysqli_close($DB);
}



?>

<body>
    <header>
        <a href="./login.php"><img src="../image/maintitle3.png"> </a><!--code-->
    </header>

    <?php   


    if ($fail){ //회원가입에 실패해 반복


        ?>
        <article>
            <h1>회원가입</h1>
            <form id="j_form" action="./Joing_User.php" method="post">
                <div class="form-group">이메일 : <input class="form-control impor" type="email" name="J_email"/></div>
                <div class="form-group">비밀번호 : <input class="form-control impor"type="password" name="J_password"/></div>
                <div class="form-group">비밀번호확인 : <input class="form-control impor" type="password" name="re_password"/></div>
                <div class="form-group">닉네임 : <input class="form-control impor" name="Nickname"/></div>
                <input type="hidden" name="checker" value="1" />
                <button class="btn btn-primary button">가입</button>
            </form>

        </article>


        <footer>

        </footer>
        <?php
    }else {  // 회원가입 성공적
        ?>
        <article>
            <form id="j_form" action="./login.php" method="post">
                <div class="form-group"><p>축하합니다! 회원가입이 완료되었습니다!</p>
                    <button class="btn btn-primary button">확인</button>
                    <input type="hidden" name="J_email" value="<?=$J_email?>" />
                    <input type="hidden" name="Nickname" value="<?=$Nickname?>" /> 
                </form>
            </article>
            <?php
        }
        ?>
    </body>
    </html>