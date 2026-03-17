let random = Math.floor(100000 + Math.random() * 900000);

var numid = document.getElementById("number");

numid.textContent = random;

function VerifyOTP() {
  var userinp = document.getElementById("txt").value;
  userinp = Number(userinp);

  var message = document.getElementById("message");

  if (userinp == random) {
    message.textContent = "OTP Verified Successfully!";
    message.className = "success";
  } else {
    message.textContent = "Invalid OTP. Try Again!";
    message.classList = "failure";
  }

  
}
