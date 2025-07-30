var formdata = document.getElementById("form-id");

formdata.addEventListener("submit", (event) => {
  event.preventDefault();

  var fnameid = document.getElementById("fname").value;
  var numid = document.getElementById("num").value;
  var emailid = document.getElementById("email").value;
  var msgid = document.getElementById("msg").value;

  console.log(fnameid);
  console.log(numid);
  console.log(emailid);
  console.log(msgid);
});
