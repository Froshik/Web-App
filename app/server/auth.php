<?php
include ('db.php');
$pass = json_decode(file_get_contents('php://input'),true);

if($pass > null){
  passExtract($pass);
}
function passExtract($params){
	$user_data = json_decode(file_get_contents('data.json'),true);
 	$passwords = array_column($user_data, 'password');
 		foreach ($passwords as $key => $value) {
    	if (password_verify($params, $value)) {

  	  	header("Location: http://localhost/tech-zadanie/page.html ");
  	  	exit();
		} else {
		}
	}
}
?>