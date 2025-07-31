var toggleid = document.getElementById("toggle-menu");

var menuid = document.getElementById("list-items");

toggleid.addEventListener("click", () => {
  menuid.classList.toggle("open");
  
});
