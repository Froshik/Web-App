
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>

	<div class="container row text-center">
	<div class="col">
	<form name="regForm" class="regForm">
			<h1>Регистрация</h1>
		<div class="mb-3">
			<label for="formGroupExampleInput" class="form-label" id="logLabel">Login</label>
			<input name="login" type="text" class="form-control" id="inputLogin">
		</div>
		<div class="mb-3">
			<label for="formGroupExampleInput" class="form-label" id="nameLabel">Name</label>
			<input name="name" type="text" class="form-control" id="inputName">
		</div>
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label" id="emailLabel">Email</label>
			<input name="mail" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
		</div>
			<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label" id="pass1Label">Password</label>
			<input name="pass-first" type="password" class="form-control" id="inputPassword1">
		</div>
		<div class="mb-3">
			
			</div>
			<div class="mb-3">
			<label for="exampleInputPassword2" class="form-label" id="pass2Label">Confirm Password</label>
			<input name="pass-second" type="password" class="form-control" id="inputPassword2">
		</div>
			<button type="submit" class="btn btn-primary" name="button-reg" id="button_registration">Регистрация</button>
		</form>
	</div>
		<div class="col">
		<form name = "authForm" class = "authForm">
			<h1> Авторизация</h1>
			<div class="mb-3">
			<label  class="form-label" id="authLoginLabel">Login</label>
			<input type="email" class="form-control" id="authLogin" aria-describedby="emailHelp">
		</div>
			<div class="mb-3">
			<label class="form-label" id="authPasswordLabel">Password</label>
			<input type="password" class="form-control" id="authPassword">
		</div>
		<!-- onclick="window.location='page.html'" -->
			<button type="submit" class="btn btn-primary" id="button_login" >Войти</button>
		</form>
	</div>
	</div>
	<script src="app/js/UserInput.js"></script>
	<script type="module" src="app/js/main.js"></script>

</body></html>