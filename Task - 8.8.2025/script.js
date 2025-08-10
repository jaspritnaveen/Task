var formid = document.getElementById("myform");

formid.addEventListener("submit", (event) => {
  event.preventDefault();

  var nameid = document.getElementsByName("name")[0].value;
  var emailid = document.getElementsByName("email")[0].value;
  var subjectid = document.getElementsByName("subject")[0].value;
  var magtid = document.getElementById("text-box").value;

  console.log(nameid);
  console.log(emailid);
  console.log(subjectid);
  console.log(magtid);
  
formid.reset();
  
});


