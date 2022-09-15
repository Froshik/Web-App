import validateAndSendUserData from './function.js'

window.addEventListener("DOMContentLoaded", () => {
let button_registration = document.getElementById("button_registration");
button_registration.addEventListener("click",(event) => registration(event), false);
});
window.addEventListener("DOMContentLoaded", () => {
let button_login = document.getElementById("button_login");
button_login.addEventListener("click",(event) => authorization(event), false);
});

function registration(event) {
 event.preventDefault();
 // Запись введенных пользователем данных в переменные
  const login = document.getElementById("inputLogin").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const name = document.getElementById("inputName").value.trim();
  const password1 = document.getElementById("inputPassword1").value.trim();
  const password2 = document.getElementById("inputPassword2").value.trim();
// Валидация полученных данных в классe UserInput 
   const userData = new UserInput(login, email, name, password1, password2);
   if (userData.validLogin() && userData.validEmail() && userData.validName() && userData.validPassword() && userData.confirmPassword()) {
    // Вызов функции для отправки запроса на сервер.
    validateAndSendUserData(email,login,name,password1);
  }
 }
// Функция для авторизации на сайте
async function authorization(event) {
  event.preventDefault();
 const login = document.getElementById("authLogin").value.trim();
 const password = document.getElementById("authPassword").value.trim();
 let arr = [{     
   login : login,
   password : password     
   }];
 if(arr !=null){
    let post = await fetch('app/server/auth.php', {
      method: 'POST',
      body: JSON.stringify(arr),
      }).then((response) => {
        return response.json();
      }).then((data) => {
  if(data === 1){
    document.location.assign('page.php');
   }else {
    window.alert("Такой пользователь не найден");
   }
  });
   } 
}







