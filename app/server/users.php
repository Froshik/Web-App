<?php
require('C:/xampp/htdocs/tech-zadanie/connect.php');
include ('db.php');
$in = json_decode(file_get_contents('php://input'),true);

if($in > null){
$answer = passChange($in);
echo ($answer);

}
function passChange($params){
 	$key = "password";
	$pass = array_pop($params);
	$pass = password_hash($pass,PASSWORD_DEFAULT);
	$params[$key] = $pass;
	$in = $params;
	writeAndSendUserData($in);
	return 1;
}
?>
