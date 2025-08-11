var formid = document.getElementById("myform");

formid.addEventListener("submit", (event) => {
  event.preventDefault();

  var nameInput = document.getElementsByName("name")[0];
  var emailInput = document.getElementsByName("email")[0];
  var subjectInput = document.getElementsByName("subject")[0];
  var msgInput = document.getElementById("text-box");

  var nameid = nameInput.value;
  var emailid = emailInput.value;
  var subjectid = subjectInput.value;
  var magtid = msgInput.value;

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));

  let valid = true;

  if (nameid.trim() === "") {
    document.getElementById("error-name").textContent = "Please fill your name";
    nameInput.classList.add("error");
    valid = false;
  }

  if (emailid.trim() === "") {
    document.getElementById("error-email").textContent =
      "Please fill your email address";
    emailInput.classList.add("error");
    valid = false;
  }

  if (subjectid.trim() === "") {
    document.getElementById("error-subject").textContent =
      "Please enter your Subject";
    subjectInput.classList.add("error");
    valid = false;
  }

  if (magtid.trim() === "") {
    document.getElementById("error-mssgg").textContent =
      "Please enter your message";
    msgInput.classList.add("error");
    valid = false;
  }

  console.log(nameid);
  console.log(emailid);
  console.log(subjectid);
  console.log(magtid);

  if (valid) {
    formid.reset();
  }
});
