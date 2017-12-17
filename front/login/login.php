<?php

$email = $_POST['email'];
$password = $_POST['password'];


$db_host = "localhost";
$db_user = "root";
$db_passwd = "root";
$db_name = "webproject";
$DB = mysqli_connect("$db_host","$db_user","$db_passwd","$db_name");

$sql = "select email from user where email = '$email' and pw = '$pw'";
$sql2 = "select pw from user where pw = '$pw' and email = '$email'";

$result = mysqli_query($DB,$sql);

$result2 = mysqli_query($DB,$sql2);



// 로그인 
if (mysqli_num_rows($result2) == 0 || mysqli_num_rows($result) == 0){

    header("location:../main.html");
} else {
    header("location:./login.html");    
}
?>  
