window.addEventListener("DOMContentLoaded", () => {
let button_registration = document.getElementById("button_registration");
button_registration.addEventListener("click",(event) => proceedRegistration(event), false);
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

  
  // if(login.length < 6){
  //   document.getElementById("logLabel").innerHTML = "Login должен быть больше 6 символов";
  //   exit();
  // }else if(name.length < 6){
  //   document.getElementById("logLabel").innerHTML = "Login";
  //   document.getElementById("nameLabel").innerHTML = "Name должен быть больше 6 символов";  
  //   exit();
  // }else if(password1.length < 6){
  //   document.getElementById("logLabel").innerHTML = "Login";
  //   document.getElementById("nameLabel").innerHTML = "Name";
  //   document.getElementById("pass1Label").innerHTML = "Password должен быть больше 6 символов";
  //   exit();
  // }else if(password1 != password2){
  //   document.getElementById("logLabel").innerHTML = "Login";
  //   document.getElementById("nameLabel").innerHTML = "Name";
  //   document.getElementById("pass1Label").innerHTML = "Password";
  //   document.getElementById("pass2Label").innerHTML = "Пароли должны совпадать";
  //   exit();
  // } else if (!regexp.test(email)){
  //   document.getElementById("emailLabel").innerHTML = "Email веден неверно";
  //   document.getElementById("pass2Label").innerHTML = "Confirm Password";
  //   document.getElementById("logLabel").innerHTML = "Login";
  //   document.getElementById("nameLabel").innerHTML = "Name";
  //   document.getElementById("pass1Label").innerHTML = "Password";
  //   exit();
  // }else{
  //   document.getElementById("emailLabel").innerHTML = "Email";
  //   document.getElementById("pass2Label").innerHTML = "Confirm Password";
  //   document.getElementById("logLabel").innerHTML = "Login";
  //   document.getElementById("nameLabel").innerHTML = "Name";
  //   document.getElementById("pass1Label").innerHTML = "Password";

    let udata = {
      admin: 0,
      login: login,
      email: email,
      name: name,
      password: password1,
    };

      var post = fetch(url, {
        method: 'POST',
        body: JSON.stringify(udata),
    }).then(response => response.json())
    .then((data) =>  console.log(data))
}
// }

      // var post = await fetch(url, {
      //       method: 'POST',
      //       body: JSON.stringify(data),
      //       headers: {
      //       'Content-Type': 'application/json'
      //       } 
      //     } );
      //     if(!post.ok) {
      //         throw new Error(`Could not fetch ${url}, status: ${post.status}`)
      //       };    
      //     const dataparse = await post.text();
      //     console.log(dataparse);

// function sendData(url, data) {
//     const send = fetch(url, {
//       method: 'POST',
//       body: data,
//       headers: {'Content-Type': 'application/json'}
//     }).then(response =>{
//       return response.json()
//        console.log(response)
//     })

//   }
   

    // async function postUserData(url, data){

    //   const res = await fetch(url,{
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Accept": "application/json",
    //       "Content-Type": "application/json"
    //     }
    //   });

    //   if(!res.ok) {
    //     throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    //   }

    //   return await res.json();
    // }
//вывод данных на страницу созданием дива
    // function createData(response){
    //    response.forEach(item => {
    //       let card = document.createElement('div');
    //       card.innerHTML = `
    //       <div>hello world</div>
    //       <div class ="name">${item.name} ${item.pass}</div>
    //       `;
    //       document.querySelector('.app').appendChild(card);
    //     });

    // }









// const requestURL = 'http://localhost/tech-zadanie/app/database/data.json'

// // function getData = async(url) => {
// //   const response = await fetch(url);

// //   if(!response.ok){
// //     throw new Error(`Error with adress ${url}, error status ${response}`)
// //   }
// //   return response.json()
// // };

// function sendData(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }
//   return fetch(url, {
//     method: 'POST',
//     body: data,
//     headers: headers
//   }).then(response =>{
//     return response.json()
//      console.log(response)
//   })

// }


// async function sendUserData(event) {
//   event.preventDefault();
//   const headers = {
//     'Content-Type': 'application/json'
//   }
//   const url = 'app/controllers/users.php';
//   const login = document.getElementById("inputLogin").value;
//   const name = document.getElementById("inputName").value;
//   const email = document.getElementById("inputEmail").value;
//   const password = document.getElementById("inputPassword1").value;
//   const data = {
//     login: login,
//     name: name,
//     email: email,
//     password: password,
//   }
//   return await fetch(url, {
//     method: 'POST',
//     body: data,
//     headers: headers
//   }).then(response =>{
//     return await response.json()
//   })

//  //  
//  //  return data
//  sendData(url, data);
//  const user_data = JSON.stringify(data)
 
 
// }







// // const headers = {
// //   'Content-Type': 'application/json'
// // }

// // function sendRequest(method, url, body = null) {
// //   return fetch(url).then(response =>{
// //     return response.json()
// //   })
// // }
// // sendRequest('GET', requestURL)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err))






// // function sendRequest(method, url, body = null) {
// //   return fetch(url,{
// //     method: method,
// //     body: JSON.stringify(body),
// //     headers: headers
// //   }).then(response =>{
// //     return response.json()
// //   })
// // }

// // sendRequest('POST',requestURL, body)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err))