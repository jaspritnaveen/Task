var formid = document.getElementById("form-details");

formid.addEventListener("submit", (event) => {
  event.preventDefault();

  var fnameid = document.getElementById("fname").value;
  var lnameid = document.getElementById("lname").value;
  var numid = document.getElementById("number").value;
  var panid = document.getElementById("pan").value;

  var resid = document.getElementById("result");

  if (fnameid.length < 3) {
    resid.innerHTML = "Please enter more than 3 characters";
    return;
  }

  console.log(fnameid);
  console.log(lnameid);
  console.log(numid);
  console.log(panid);

  formid.reset();
  resid.innerHTML = "";
});
