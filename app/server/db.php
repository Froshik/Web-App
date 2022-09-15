<?php
require_once ('connect.php');
//Удобное отображение полученных данных из массива Отладочная функция
function tt($value){
	echo '<pre>';
	print_r($value);
	echo '</pre>';
}

// Запись пользователя в data.json
 function writeUserDataJson($user_data){
    	if (empty($user_data)) {
    		return;
    	}
    $filename = "data.json";
    $users_data = file_get_contents($filename); 
    $users_list = json_decode($users_data, true);
    $users_list[] = $user_data;
    $users_data_as_json = json_encode($users_list, JSON_PRETTY_PRINT);
    file_put_contents($filename, $users_data_as_json);
    }

