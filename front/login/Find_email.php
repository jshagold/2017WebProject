<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>그 밥 사</title>
	<link href="../css/bootstrap.css" type="text/css" rel="stylesheet"/>
	<link href="./css/joing_user.css" type="text/css" rel="stylesheet"/>
</head>

<body>
	<header>
		<a href="./login.php"><img src="../image/maintitle3.png" alt="Go main page"></a><!--code-->
	</header>

	<article>
		<?php

		$J_email = $_POST['email'];
		$first_join = $_POST['first_join'];
		$db_host = "localhost";
		$db_user = "root";
		$db_passwd = "root";
		$db_name = "webproject";
		$DB = mysqli_connect("$db_host","$db_user","$db_passwd","$db_name");
		$sql = "select pw from user where email = '$J_email'";
		$result = mysqli_query($DB,$sql);
		$count = mysqli_num_rows($result);
		$row = mysqli_fetch_assoc($result);
		?>

		<form id="f_form" action="Find_email.php" method="post">
			<p>가입할 때 사용한 이메일</p>

			<div class="form-group"><input class="form-control" name="email"/></div>
			<input type="hidden" name="first_join" value="1" />
			<button class="btn btn-primary button" type = "submit">찾기</button>
		</form>
		<?php
		if ($count == 0 && $first_join == 1){ ?>
		<p>이메일을 확인해주세요.</p>
		<?php

	}if ($count != 0 && $first_join == 1 && !empty($J_email)) {
		?>
		<form id="f_form" action="login.html" method="post">
			<p>비밀번호 : <?=$row['pw']?></p>
			<button class="btn btn-primary button" type = "submit">확인</button>
			<input type="hidden" name="first_join" value="0" />
		</form>
		<?php
	}
	?>
</article>

<footer>

</footer>
</body>
</html>