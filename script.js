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
//more differant AI code
// Get the user agent string
var test = navigator.userAgent;

// Find the element where you want to display the result (e.g., a <p> with id="userAgentDisplay")
var displayElement = document.getElementById("userAgentDisplay");

if (displayElement) {
  // If the element exists, update the text content with the user agent string
  if (test) {
    displayElement.textContent = `Your User Agent is: ${test}`;
  } else {
    displayElement.textContent = "Something is broken, sorry but my code sucks.";
  }
} else {
  console.log("Element with id 'userAgentDisplay' not found!");
}
//========================================================================
//AI code quarantine

//This is a test using AI code that works

const Testparams = new URLSearchParams(window.location.search);
const test = Testparams.get("test");

// Update the page
const HW = document.getElementById("HW");

if (test) {
  HW.textContent = `Hello, ${test}!`;
} else {
  HW.textContent = "WHO YOU IS!";
}
