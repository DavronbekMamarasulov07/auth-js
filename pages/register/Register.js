const registerForm = document.getElementById("register-form");
const registerInputUsername = document.getElementById("register-input--username");
const registerInputEmail = document.getElementById("register-input--email");
const registerInputPassword = document.getElementById("register-input--password");
const regiserMessage = document.querySelector(".form-message");
const registerFormImage = document.getElementById("form__img");
const errorMessage = document.querySelector(".form-error-message");


const handlePasswordVisible = () => {
  if(registerInputPassword.type == "password"){
    registerInputPassword.type = "text";
    registerFormImage.src = "../../images/eye_blocked-removebg-preview.png"
  }
  else if(registerInputPassword.type == "text"){
    registerInputPassword.type = "password";
    registerFormImage.src = "../../images/Eye_View-removebg-preview.png";
  }
}




function FormData(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

const handleFormSubmit = (e) => {
  e.preventDefault();

  const registerNewUsername = registerInputUsername.value;
  const registerNewEmail = registerInputEmail.value;
  const registerNewPassword = registerInputPassword.value;


  const formData = new FormData(registerNewUsername, registerNewEmail, registerNewPassword);
  const existingUsers = JSON.parse(localStorage.getItem("new-user")) || [];


  const isUser = existingUsers && existingUsers.filter(user => user.email === registerNewEmail);

  if(registerNewPassword.length < 5 ) {
    errorMessage.classList.add("form-error-message--active")
    errorMessage.textContent = "Password should be at least 5 characters long"

    setTimeout(() => {
      errorMessage.classList.remove("form-error-message--active")
    },3000)

  }

  if(registerNewUsername.trim() === "" ) {
    errorMessage.classList.add("form-error-message--active")
    errorMessage.textContent = "Please fill in all the fields"

    setTimeout(() => {
      errorMessage.classList.remove("form-error-message--active")
    },3000)

  }
  
  else if(!isUser){
    errorMessage.classList.add("form-error-message--active")
    errorMessage.textContent = "User not found"

    setTimeout(() => {
      errorMessage.classList.remove("form-error-message--active")
    },3000)

  }

  else if(isUser && isUser.length > 0) {
    errorMessage.classList.add("form-error-message--active")
    setTimeout(() => {
      errorMessage.classList.remove("form-error-message--active")
    },3000)
  }

  else{
    existingUsers.push(formData);
    localStorage.setItem("new-user", JSON.stringify(existingUsers))
    regiserMessage.classList.add("form-message--active");

      setTimeout(() => {
        regiserMessage.classList.remove("form-message--active");
      },3000)
    setTimeout(() => {
        window.location.href = "../login/Login.html";
      },2000)
      e.target.reset();
  }
  
  
};

registerForm.addEventListener("submit", handleFormSubmit);
registerFormImage.addEventListener("click" ,handlePasswordVisible )
