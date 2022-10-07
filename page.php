<?php 
//Страница авторизированного пользоватиля с счетчиком посещения страницы куки и выходом
require_once 'app/server/connect.php';
if (isset($_SESSION['session_login'])){
	echo 'Hi ' . $_SESSION['session_login'] . ' login successfully';
	echo '<br>';
	echo 'You visit this page ' . $_COOKIE['page_visit'] . ' times on last five seconds';
	echo '<br>';
	echo '<a href = "logout.php"> Exit </a>';
}else{
	die('Access denied');
}



?>