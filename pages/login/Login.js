// const registerForm = document.getElementById("register-form");
// const registerInputUsername = document.getElementById(
//   "register-input--username"
// );
// const registerInputEmail = document.getElementById("register-input--email");
// const registerInputPassword = document.getElementById(
//   "register-input--password"
// );
// const regiserMessage = document.querySelector(".form-message");
// const registerFormImage = document.getElementById("form__img");

// const handlePasswordVisible = () => {
//   if (registerInputPassword.type == "password") {
//     registerInputPassword.type = "text";
//     registerFormImage.src = "../../images/eye_blocked-removebg-preview.png";
//   } else if (registerInputPassword.type == "text") {
//     registerInputPassword.type = "password";
//     registerFormImage.src = "../../images/Eye_View-removebg-preview.png";
//   }
// };

// let newUsers = [];
// function FormData(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   const registerNewUsername = registerInputUsername.value;
//   const registerNewEmail = registerInputEmail.value;
//   const registerNewPassword = registerInputPassword.value;

//   console.log(registerNewUsername, registerNewEmail, registerNewPassword);

//   const formData = new FormData(
//     registerNewUsername,
//     registerNewEmail,
//     registerNewPassword
//   );

//   newUsers.push(formData);

//   JSON.stringify(localStorage.setItem("new-user", JSON.stringify(newUsers)));

//   regiserMessage.classList.add("form-message--active");

//   setTimeout(() => {
//     regiserMessage.classList.remove("form-message--active");
//   }, 5000);
//   e.target.reset();
// };

// registerForm.addEventListener("submit", handleFormSubmit);
// registerFormImage.addEventListener("click", handlePasswordVisible);
