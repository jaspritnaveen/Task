


function Validateform() {
  //Input Tag Id
  var name = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message").value;

  //Span Tag Id
  var nameerror = document.getElementById("username-error");
  var emailerror = document.getElementById("email-error");
  var passworderror = document.getElementById("password-error");
  var messageerror = document.getElementById("message-error");

  //Initially Empty the SPAN Tag
  nameerror.textContent = "";
  emailerror.textContent = "";
  passworderror.textContent = "";
  messageerror.textContent = "";

  let isValid = true;

  //Name Tag Validatioin
  if (name === "") {
    nameerror.innerHTML =
      "<span style='color:red;'>❌ Please enter name</span>"; // Styled

    isValid = false;
  }

  //Email Field
  if (email === "" || !email.includes("@")) {
    emailerror.textContent = "Please enter valid email ";
    isValid = false;
  }

  //Password Field
  if (password == "" || password.length < 6) {
    passworderror.textContent 
    = "Please enter valid password ";
    isValid = false;
  }

  //Message Error

  if (message == "") {
    messageerror.textContent = "Please enter message ";
    isValid = false;
  }

  return isValid;
}
