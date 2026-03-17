var formid = document.getElementById("contactform");

formid.addEventListener("submit", (action) => {
  action.preventDefault();

  var nameid = document.getElementById("name");
  var emailid = document.getElementById("email");
  var numberid = document.getElementById("number");
  var messageid = document.getElementById("message");

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));

  let valid = true;

  if (nameid.value.trim() === "") {
    document.getElementById("name-error").textContent = "Please enter name";
    nameid.classList.add("error");
    valid = false;
  }

  if (emailid.value.trim() === "") {
    document.getElementById("email-err").textContent = "Please enter mail id";
  }
});
