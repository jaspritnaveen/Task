var passid = document.getElementById("pass-inp");

passid.addEventListener("input", () => {
  var passval = passid.value;
  var err = document.getElementById("error");

  // reset styles each time
  err.textContent = "";
  err.style.color = "";
  passid.style.borderColor = "";

  if (passval.length <= 4) {
    err.textContent = "Weak password";
    err.style.color = "red"; // text color
    passid.style.borderColor = "red"; // border color
  } else if (passval.length >= 5 && passval.length <= 8) {
    err.textContent = "Medium password";
    err.style.color = "orange"; // or yellow
    passid.style.borderColor = "orange";
  } else if (passval.length >= 9 && passval.length <= 10) {
    err.textContent = "Strong password";
    err.style.color = "green";
    passid.style.borderColor = "green";
  } else if (passval.length >= 11) {
    err.textContent = "Very Strong password";
    err.style.color = "blue"; // pick any color
    passid.style.borderColor = "blue";
  } else {
    err.textContent = "";
    err.style.color = "";
    passid.style.borderColor = "";
  }
});
