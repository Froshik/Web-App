 // Функция отправляющая запрос на сервер с данными из формы регистрации
 async function validateAndSendUserData(email,login,name,password1){
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
          if(data == 1){
           document.location.assign('index.html');
          window.alert("Регистрация прошла успешно");
        }else {window.alert("Этот Email или Login уже заняты");}
      })
    }
export default validateAndSendUserData;