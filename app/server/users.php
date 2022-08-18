<?php
require('D:/Server/htdocs/tech-zadanie/connect.php');
include ('db.php');
$in = json_decode(file_get_contents('php://input'),true);
$out[] = json_encode($in);

if($in > null){
 function passChange($params){
 	$key = "password";
	$pass = array_pop($params);
	$pass = password_hash($pass,PASSWORD_DEFAULT);
	$params[$key] = $pass;
	$in = $params;
	writeAndSendUserData($in);
}


passChange($in);

}


?>
