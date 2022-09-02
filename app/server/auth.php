<?php
include ('db.php');
$pass = json_decode(file_get_contents('php://input'),true);

if($pass > null){
 $message = passExtract($pass);
  echo ($message);
}
function passExtract($params){
	$user_data = json_decode(file_get_contents('data.json'),true);
 	$passwords = array_column($user_data, 'password');
 		foreach ($passwords as $key => $value) {
    	if (password_verify($params, $value)) {
    		$return = 1;
    		// $_SESSION['user_login']
		}else{
			$return = 0;
		} 
		
	}return($return);
}
?>