// Валидация введенных данных в форму регистрации
class UserInput{
  constructor(login, email, name, password1, password2){
    this.login = login;
    this.email = email;
    this.name = name;
    this.password1 = password1;
    this.password2 = password2;
    this.regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  } 
  validLogin(){
    if(this.login.includes(' ')){
        document.getElementById("logLabel").innerHTML = "Login must not include spaces";
        return false;
      }
      if (this.login.length < 6){
        document.getElementById("logLabel").innerHTML = "Your Login must be at least 6 characters";
        return false;
      }
      document.getElementById("logLabel").innerHTML = "Login";
      return true;
    }
  validEmail(){
    if (!this.regexp.test(this.email)){
        document.getElementById("emailLabel").innerHTML = "Email введен не верно";
        return false;
      }
      document.getElementById("emailLabel").innerHTML = "Email";
      return true;
    }
  validName(){
     if(this.name.includes(' ')){
        document.getElementById("nameLabel").innerHTML = "Name must not include spaces";
        return false;
      }
    if (this.name.length < 2){
        document.getElementById("nameLabel").innerHTML = "Your Name must be at least 2 characters";
        return false;
      }
      document.getElementById("nameLabel").innerHTML = "Name"
      return true;
    }
  validPassword(){
     if(this.password1.includes(' ')){
        document.getElementById("pass1Label").innerHTML = "Password must not include spaces";
        return false;
      }
    if (this.password1.length < 6){
        document.getElementById("pass1Label").innerHTML = "Password должен быть больше 6 символов";
        return false;
      }
      document.getElementById("pass1Label").innerHTML = "Password";
      return true;
    }
  confirmPassword(){
    if(this.password1 !== this.password2){
      document.getElementById("pass2Label").innerHTML = "Пароли должны совпадать";
      return false;
    }
     document.getElementById("pass2Label").innerHTML = "Confirm Password";
     return true;
  }

  }