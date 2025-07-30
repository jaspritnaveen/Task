let togglemenu = document.getElementById("mobiletoggle");
let menulink = document.getElementById("menusss");
togglemenu.addEventListener("click", () => {
  menulink.classList.toggle("open");
  // menulink.classList.add('bx-x');
});

// initizing the form data
let myData = document.getElementById("contactform");
myData.addEventListener("submit", (e) => { 
  e.preventDefault();

  // carry the form data
  let username = document.getElementById("username");
  let useremail = document.getElementById("usermail");
  let usermobile = document.getElementById("usernumber");
  let usercomments = document.getElementById("usercomments");

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));
  document
    .querySelectorAll(".errors")
    .forEach((er) => er.classList.remove("error"));

  // this valaidation part
  let valid = true;
  if (username.value.trim() === "") {
    document.getElementById("error-name").textContent = "please fill Your name";
    username.classList.add("error");
    valid = false;
  }


  const emailsyndex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailsyndex.test(useremail.value.trim())) {
    document.getElementById("error-mail").textContent =
      "please fill your correct mail id";
    useremail.classList.add("error");
    valid = false;
  }


  const phonePattern = /^[6-9]\d{9}$/;
  if (!phonePattern.test(usermobile.value.trim())) {
    document.getElementById("error-number").textContent =
      "please fill correct mobile number";
    usermobile.classList.add("error");
    valid = false;
  }
  if (usercomments.value.trim().length < 10) {
    document.getElementById("error-feed").textContent =
      "please write max 10 words";
    usercomments.classList.add("error");
    valid = false;
  }
  
  if (valid) {
    const data = {
      name: username.value.trim(),
      email: usermail.value.trim(),
    };
    console.log(data);
    window.alert("form submitted successfully");
    document.getElementById("contactform").reset();
  }
});
