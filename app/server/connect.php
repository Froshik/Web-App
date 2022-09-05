//Проверить данные для подключение к MySQL
<?php //Данные для входа в базу данных MySql
$driver = 'mysql';
$host = 'localhost';
$db_name = 'client-db';
$db_user = 'root';
$db_pass = '';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];

try{
    $pdo = new PDO(
        "$driver:host=$host;dbname=$db_name;charset=$charset", $db_user, $db_pass, $options );
//Сохдание Куки и инициализация сессии
if(isset($_COOKIE['page_visit']) ){
    setcookie('page_visit', ++$_COOKIE['page_visit'], time() + 5);
    } else{
        setcookie('page_visit', 1, time() + 5);
        $_COOKIE['page_visit'] = 1;
    }
    session_start();

}// Обработка ошибки подключения к базе данных MySql
catch (PDOException $i){
    die("Ошибка подключения к базе данных");
}

 ?>
