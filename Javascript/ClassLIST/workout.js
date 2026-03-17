function greeting(phrase, name) {
  console.log(phrase + " " + name);
}

// Runs every 3 seconds

let timerId = setInterval(greeting, 3000, "Hi", "Mike");
clearTimeout(timerId); // ✅ This would stop it before it runs
