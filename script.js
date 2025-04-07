// this is my js test, I'm still quite new to js as of this commit

//AI code because I suck
//=========================================================================
// Grab URL parameters
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// Update the page
const greeting = document.getElementById("greeting");

if (name) {
  greeting.textContent = `Hello, ${name}!`;
} else {
  greeting.textContent = "Hello, stranger!";
}
//=========================================================================
//AI code quarantine

var test = navigator.userAgent;
if (test) {
  test.textContent = `${test}`;
}
else {
  test.textContent = `Something is broken, sorry but my code sucks.`;
}
