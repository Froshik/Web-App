<?php
require('C:/xampp/htdocs/tech-zadanie/connect.php');
//Удобное отображение полуученных данных из массива
function tt($value){
	echo '<pre>';
	print_r($value);
	echo '</pre>';
}

//Проверка выполнения запроса к БД
function dbCheckError($query){
	$errInfo = $query->errorInfo();

	if ($errInfo[0] !== PDO::ERR_NONE){
	echo $errInfo[2];
	exit();
	}
	return true;
}

//Запрос на получение данных c одной таблицы
function selectALL($table, $params = []){
	global $pdo;
	$sql = "SELECT * FROM $table";

	if(!empty($params)){
		$i = 0;
		foreach ($params as $key => $value) {
			if(!is_numeric($value)){
				$value = "'" .$value. "'";
			}
			if($i === 0){
				$sql = $sql . " WHERE $key=$value";
			}else{
				$sql = $sql . " AND $key=$value";
			}
			$i++;
		}
	}
	$query = $pdo->prepare($sql);
	$query->execute();
	dbCheckError($query);
	return $query->fetchALL();
}

//Запрос на получение данных с одной строки  данных c одной таблицы
function selectOne($table, $params = []){
	global $pdo;
	$sql = "SELECT * FROM $table";

	if(!empty($params)){
		$i = 0;
		foreach ($params as $key => $value) {
			if(!is_numeric($value)){
				$value = "'" .$value. "'";
			}
			if($i === 0){
				$sql = $sql . " WHERE $key=$value";
			}else{
				$sql = $sql . " AND $key=$value";
			}
			$i++;
		}
	}
	// $sql = $sql . " LIMIT 1";
	$query = $pdo->prepare($sql);
	$query->execute();
	dbCheckError($query);
	return $query->fetch();
}


//запись данных в БД
function insert($table, $params){
	global $pdo;
	$i=0;
	$coll = '';
	$mask = '';
	foreach ($params as $key => $value) {
		if ($i === 0){
			$coll = $coll . "$key";
			$mask = $mask . "'" ."$value"."'";	
		}else {
			$coll = $coll . ", $key";
			$mask = $mask . ", '" . "$value" . "'";
		}
		$i++;
	}

	$sql = "INSERT INTO $table ($coll) VALUES ($mask)";

	$query = $pdo->prepare($sql);
	$query->execute();
	dbCheckError($query);
}

 function sendLastUserData(){
 	global $pdo;
    $filename = "data.json";
    $users_data = file_get_contents($filename); 
    $users_list = json_decode($users_data, true);
    $last_user = end($users_list);
    $post = [
			'admin' => $last_user['admin'],
			'login' => $last_user['login'],
			'email' => $last_user['email'],
			'name' => $last_user['name'],
			'password' => $last_user['password']
		];
		insert('users', $post);
    }

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

 function writeAndSendUserData($user_data){
    	if (empty($user_data)) {
    		return;
    	}
    	writeUserDataJson($user_data);
    	sendLastUserData();
    }