<?php 
require_once 'connect.php';
if (isset($_SESSION['session_login'])){
	echo 'Добро пожаловать ' . $_SESSION['session_login'] . ' вы успешно авторизировались';
	echo '<br>';
	echo 'Вы посещали эту страницу ' . $_COOKIE['page_visit'] . ' раз за последние 5 секунд';
	echo '<br>';
	echo '<a href = "logout.php"> Выход из аккаунта </a>';
}else{
	die('Нет доступа к странице');
}



?>