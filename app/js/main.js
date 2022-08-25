window.addEventListener("DOMContentLoaded", () => {
let button_registration = document.getElementById("button_registration");
button_registration.addEventListener("click",(event) => proceedRegistration(event), false);
});
window.addEventListener("DOMContentLoaded", () => {
let button_login = document.getElementById("button_login");
button_login.addEventListener("click",(event) => authorization(event), false);
});

 function proceedRegistration(event) {
 event.preventDefault();

  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const url = 'app/server/users.php'; //app/database/data.json
  const login = document.getElementById("inputLogin").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const name = document.getElementById("inputName").value.trim();
  const password1 = document.getElementById("inputPassword1").value.trim();
  const password2 = document.getElementById("inputPassword2").value.trim();

  if(login.length < 6){
    document.getElementById("logLabel").innerHTML = "Login должен быть больше 6 символов";
  }else if(name.length < 6){
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("nameLabel").innerHTML = "Name должен быть больше 6 символов";  
  }else if(password1.length < 6){
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("nameLabel").innerHTML = "Name";
    document.getElementById("pass1Label").innerHTML = "Password должен быть больше 6 символов";
  }else if(password1 != password2){
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("nameLabel").innerHTML = "Name";
    document.getElementById("pass1Label").innerHTML = "Password";
    document.getElementById("pass2Label").innerHTML = "Пароли должны совпадать";
  } else if (!regexp.test(email)){
    document.getElementById("emailLabel").innerHTML = "Email веден неверно";
    document.getElementById("pass2Label").innerHTML = "Confirm Password";
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("nameLabel").innerHTML = "Name";
    document.getElementById("pass1Label").innerHTML = "Password";
  }else{
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("pass2Label").innerHTML = "Confirm Password";
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("nameLabel").innerHTML = "Name";
    document.getElementById("pass1Label").innerHTML = "Password";

async function findUserInJsonDb(value1,value2){
const response = await fetch('app/server/data.json');
const jsonDB = await response.json();
const findEmail = jsonDB.find(jsonDB => jsonDB.email === value1);
const findLogin = jsonDB.find(jsonDB => jsonDB.login === value2);
if(findLogin != null) {
document.getElementById("logLabel").innerHTML = "Такой Login уже зарегестрирован";
  }else if(findEmail != null) {
    document.getElementById("logLabel").innerHTML = "Login";
    document.getElementById("emailLabel").innerHTML = "Такой Email уже зарегестрирован";
  }else{
    document.getElementById("emailLabel").innerHTML = "Email";
    document.getElementById("logLabel").innerHTML = "Login";
    let udata = {
      admin: 0,
      login: login,
      email: email,
      name: name,
      password: password1
    };
      var post = fetch(url, {
        method: 'POST',
        body: JSON.stringify(udata),
    }).then(response => response.json())
    .then((data) =>  console.log(data))
  };
}
findUserInJsonDb(email,login);
}
}
 async function authorization(event) {
 event.preventDefault();
const login = document.getElementById("authLogin").value.trim();
const password = document.getElementById("authPassword").value.trim();
const response = await fetch('app/server/data.json');
const jsonDB = await response.json();
const findLogin = jsonDB.find(jsonDB => jsonDB.login === login);
if(findLogin !=null){
  var post = fetch('app/server/auth.php', {
        method: 'POST',
        body: JSON.stringify(password),
    }).then(response => response.json())
    .then((data) =>  console.log(data))
}
}