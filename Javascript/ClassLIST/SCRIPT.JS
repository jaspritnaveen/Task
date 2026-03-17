// SUBMIT
myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload
  alert("Form submitted!");
});

// CHANGE (select, checkbox, etc.)
dropdown.addEventListener("change", () => {
  console.log("Selected:", dropdown.value);
});

// INPUT (fires on typing)
nameInput.addEventListener("input", () => {
  console.log("Typing:", nameInput.value);
});

// FOCUS
nameInput.addEventListener("focus", () => {
  console.log("Input focused");
});

// BLUR
nameInput.addEventListener("blur", () => {
  console.log("Input lost focus");
});

// KEYDOWN
textInput.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});

// KEYUP
textInput.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});




// CLICK
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// DBLCLICK
document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("Button double clicked!");
});

// MOUSEENTER
document.getElementById("hoverDiv").addEventListener("mouseenter", () => {
  hoverDiv.style.background = "orange";
});

// MOUSELEAVE
document.getElementById("hoverDiv").addEventListener("mouseleave", () => {
  hoverDiv.style.background = "lightblue";
});

// MOUSEMOVE
document.getElementById("hoverDiv").addEventListener("mousemove", () => {
  console.log("Mouse moving on the box!");
});




  // PAGE LOAD
  window.addEventListener("load", () => {
    console.log("Page fully loaded!");
  });

  // DOM CONTENT LOADED
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready!");
  });

  // RESIZE
  window.addEventListener("resize", () => {
    console.log("Window resized:", window.innerWidth, "x", window.innerHeight);
  });

  // SCROLL
  window.addEventListener("scroll", () => {
    console.log("Scrolling the page!");
  });

