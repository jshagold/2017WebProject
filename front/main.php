<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="./css/bootstrap.css" type="text/css" rel="stylesheet" />
	<link href="./css/form.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="./js/jquery-3.2.1.js"></script>
	<script src="./js/bootstrap.js"></script>
	<script src="./js/form.js" type="text/javascript"></script>
	<title>그 밥 사</title>
</head>

<body>
	<?php

	$old_user = $_POST["email"]; // 원래 회원 이메일
	$new_user = $_POST["jEmail"]; // 새로 가입한 이메일
	
	?>
	<header>
		<img src="./image/menu_icon.png" id="asidebtn" />
		<a href="./main.html">
			<img src="./image/maintitle3.png">
		</a>
	</header>

	<aside>
		<a href="./match_view/fastmatch.html">매칭</a>
		<a href="./info/menu/info_menu.html">음식점정보</a>
		<a href="./login/login.php">로그아웃</a>

	</aside>
	<form action = <?= $hi ?> method="post">
		<article>
			<ul>
				<li>Input Elements</li>
			</ul>
			<button type = "submit">랜덤매칭</button>
			<button type = "submit">선택매칭</button>
		</article>
	</form>
</body>
</html>