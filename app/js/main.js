import validateAndSendUserData from './function.js'

window.addEventListener("DOMContentLoaded", () => {
let button_registration = document.getElementById("button_registration");
button_registration.addEventListener("click",(event) => Registration(event), false);
});
window.addEventListener("DOMContentLoaded", () => {
let button_login = document.getElementById("button_login");
button_login.addEventListener("click",(event) => authorization(event), false);
});

function Registration(event) {
 event.preventDefault();
 // Запись введенных пользователем данных в переменные
  const login = document.getElementById("inputLogin").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const name = document.getElementById("inputName").value.trim();
  const password1 = document.getElementById("inputPassword1").value.trim();
  const password2 = document.getElementById("inputPassword2").value.trim();
// Валидация полученных данных в классe UserInput 
  const i = new UserInput(login, email, name, password1, password2);
  if (i.validLogin() && i.validEmail() && i.validName() && i.validPassword() && i.confirmPassword()) {
    // Вызов функции для проверки уникальности пользователя и его записи в базу данных
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







