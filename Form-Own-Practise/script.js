var myid = document.getElementById("detailsform");

myid.addEventListener("submit", (event) => {
  event.preventDefault();

  var username = document.getElementById("name");
  var emailid = document.getElementById("email");
  var messageid = document.getElementById("message-box");

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));

  let valid = true;
  if (username.value.trim() === "") {
    document.getElementById("error-name").textContent = "please fill Your name";
    username.classList.add("error");
    valid = false;
  }

  const emailsyndex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailsyndex.test(emailid.value.trim())) {
    document.getElementById("error-mail").textContent =
      "please enter valid mail id";
    valid = false;
  }

  if (messageid.value.trim().length < 10) {
    document.getElementById("error-msg").textContent =
      "Please enter more than 10 characters";
    valid = false;
  }

  if (valid) {
    const data = {
      name: username.value.trim(),
      email: emailid.value.trim(),
      message: messageid.value.trim(),
    };

    console.log(data.name);
    console.log(data.email);
    console.log(data.message);

    window.alert("Form submitted successfully");
    myid.reset();
  }
});
