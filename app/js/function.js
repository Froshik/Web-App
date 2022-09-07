 // Функция проверяющая наличие такого пользователя в базе данных по уникальным полям Login & Email
 async function validateAndSendUserData(email,login,name,password1){
    const response = await fetch('app/server/data.json');
    const jsonDB = await response.json();
    const findEmail = jsonDB.find(jsonDB => jsonDB.email === email);
    const findLogin = jsonDB.find(jsonDB => jsonDB.login === login);
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
          var post = fetch('app/server/users.php', {
            method: 'POST',
            body: JSON.stringify(udata),
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data === 1){
          document.location.assign('index.html');
         window.alert("Регистрация прошла успешно");
        } 
      })
    }
  }
export default validateAndSendUserData;