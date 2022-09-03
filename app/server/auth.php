<?php
include ('db.php');
// Получение Логина и Пароля из формы авторизации
$loginData = json_decode(file_get_contents('php://input'),true);

if($loginData > null){
	// Ответ от сервера с результатом проверки
 $message = userExtract($loginData);
  echo ($message);
} // Проверка наличия пользователя в базе данных и правильно введенного пароля
function userExtract($params){
	$db = json_decode(file_get_contents('data.json'),true);
	$authData = array_column($db, 'password', 'login');
	$userData = (array_column($params, 'password', 'login'));
	$userPass = current($userData);
 	$hash = current(array_intersect_key($authData, $userData));
 	if(password_verify($userPass, $hash)){
 		$return = 1;
 		$_SESSION['session_login'] = array_key_first($userData);
 	}else{
 		$return = 0;
 	}
 	return($return);
	}
?>