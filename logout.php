<?php
// Уничтожение куки и сессии
require_once 'connect.php';

$_SESSION = [];

if (isset($_COOKIE[session_name()]) ){
	setcookie(session_name(), '', time()-3600, '/');
}

session_destroy();

header('Location: 2index.php');