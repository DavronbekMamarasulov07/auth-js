  const loginForm = document.getElementById("login-form");
  const loginInputEmail = document.getElementById(
    "login-input--email"
  );
  const loginInputPassword = document.getElementById(
    "login-input--password"
  );
  const loginMessage = document.querySelector(".form-message");
  const loginFormImage = document.getElementById("form__img");
  const errorMessage = document.querySelector(".form-error-message");

  const handlePasswordVisible = () => {
    if (loginInputPassword.type == "password") {
      loginInputPassword.type = "text";
      loginFormImage.src = "../../images/eye_blocked-removebg-preview.png";
    } else if (loginInputPassword.type == "text") {
      loginInputPassword.type = "password";
      loginFormImage.src = "../../images/Eye_View-removebg-preview.png";
    }
  };

  let newUsers = [];
  function FormData( email, password) {
    this.email = email;
    this.password = password;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginNewEmail = loginInputEmail.value;
    const loginNewPassword = loginInputPassword.value;


  let user = JSON.parse(localStorage.getItem("new-user"))
 


    const formData = new FormData(
      loginNewEmail,
      loginNewPassword
    );

    newUsers.push(formData);

 console.log(user , newUsers)

   const isUser = user.filter((user) => user.email === loginNewEmail && user.password === loginNewPassword);

   if (isUser.length > 0) {
    setTimeout(() => {
      window.location.href = "../../index.html";
    },1000)
    loginMessage.classList.add("form-message--active");

   
  } else {
    errorMessage.classList.add("form-error-message--active");

    setTimeout(() => {
      errorMessage.classList.remove("form-error-message--active");
    }, 3000);
  }
  
  e.target.reset();


    
  };

  loginForm.addEventListener("submit", handleFormSubmit);
  loginFormImage.addEventListener("click", handlePasswordVisible);
