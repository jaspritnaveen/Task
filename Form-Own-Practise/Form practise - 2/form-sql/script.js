var form_id = document.getElementById("sign-form");

form_id.addEventListener("submit", (event) => {
  event.preventDefault();

  var name_id = document.getElementById("name");
  var email_id = document.getElementById("email");
  var pass_id = document.getElementById("pass");
  var cpass_id = document.getElementById("cpass");

  let valid = true;

  // Clear previous error
  document.getElementById("name-error").textContent = "";

  // Name validation
  if (name_id.value.trim() === "") {
    document.getElementByClassName(".error").textContent =
      "Please enter your name";
    name_id.classList.add(".error");
    valid = false;
  }
});
