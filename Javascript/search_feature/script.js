// Get the search input and all fruit divs
const searchInput = document.getElementById("search");
const fruits = document.querySelectorAll(".fruit");

// Listen to input changes
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase(); // convert to lowercase for case-insensitive search

  fruits.forEach((fruit) => {
    const fruitName = fruit.querySelector("h1").textContent.toLowerCase();

    if (fruitName.includes(searchTerm)) {
      fruit.style.display = "block";
    } else {
      fruit.style.display = "none";
    }
  });
});
