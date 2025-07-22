const searchInput = document.getElementById("search");
const fruits = document.querySelectorAll(".fruit");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  fruits.forEach((fruit) => {
    const fullText = fruit.innerText.toLowerCase(); 
    if (fullText.includes(searchTerm)) {
      fruit.style.display = "block";
    } else {
      fruit.style.display = "none";
    }
  });
});
