<?php
require_once ('connect.php');
include ('db.php');
//Проверка на уникальность Логина и Почты
class ValidRegUser{
 	public $inputData = 0;
 	public $jsonUserEmail = 0;
 	public $jsonUserLogin = 0;
 	public $findEmail = 0;
 	public $findLogin = 0;

 	function __construct($inputData,$jsonUserEmail,$jsonUserLogin) {
      $this->inputData = $inputData;
      $this->jsonUserEmail = $jsonUserEmail;
      $this->jsonUserLogin = $jsonUserLogin;

  }
 	function vanidRegUserEmail(){
 		foreach ($this->jsonUserEmail as $value) {
 		$this->findEmail = in_array($value, $this->inputData);
 		if($this->findEmail != 0){
 			return 1;
 		}
		}
 	}
 	function vanidRegUserLogin(){
 		foreach ($this->jsonUserLogin as $value) {
 		$this->findLogin = in_array($value, $this->inputData);
 		if($this->findLogin != 0){
 			return 1;
 		}
 	}
}
}// Хэширование пароля и запись пользователя в базу данных
function passChange($params){
 	$key = "password";
	$pass = array_pop($params);
	$pass = password_hash($pass,PASSWORD_DEFAULT);
	$params[$key] = $pass;
	$in = $params;
	writeUserDataJson($in);
	return 1;
}


// Прием данных из формы регистрации
$inputData = json_decode(file_get_contents('php://input'),true);
if($inputData > null){
	$db = json_decode(file_get_contents('data.json'),true);
	$jsonUserEmail = array_column($db, 'email');
	$jsonUserLogin = array_column($db, 'login');

	$valid = new ValidRegUser($inputData,$jsonUserEmail,$jsonUserLogin);
	 if($valid->vanidRegUserEmail() || $valid->vanidRegUserLogin()){
	 	echo 0;
	 }
	 else{
	$answer = passChange($inputData);
	echo ($answer);
	}
}
?>
