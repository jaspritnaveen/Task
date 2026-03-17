const myData = document.getElementById("contactform");
myData.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username");
  const useremail = document.getElementById("usermail");
  const usercomments = document.getElementById("usercomments");

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));
  username.classList.remove("error");
  useremail.classList.remove("error");
  usercomments.classList.remove("error");

  let valid = true;

  if (username.value.trim() === "") {
    document.getElementById("error-name").textContent = "Please fill your name";
    username.classList.add("error");
    valid = false;
  }

  const emailsyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailsyntax.test(useremail.value.trim())) {
    document.getElementById("error-mail").textContent =
      "Please enter a valid email  address";
    useremail.classList.add("error");
    valid = false;
  }

  var len = usercomments.value.length;

  if (!len < 10) {
    document.getElementById("error-feed").textContent =
      "Please write max 10 words";
    usercomments.classList.add("error");
    valid = false;
  }

  if (valid) {
    const data = {
      name: username.value.trim(),
      email: useremail.value.trim(),
      comments: usercomments.value.trim(),
    };
    console.log(data);
    alert("Form submitted successfully");
    myData.reset();
  }
});
