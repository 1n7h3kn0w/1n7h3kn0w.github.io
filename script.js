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



//This is also AI code but caleb kind of looked over it so it should be good
//=============================================================================================

// Function to get a query parameter by name
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to set a cookie
function setCookie(key, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie by name
function getCookie(key) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [cookieKey, cookieValue] = cookies[i].split('=');
    if (cookieKey === key) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

// Main function to set the debug text
window.addEventListener('DOMContentLoaded', () => {
  let userName = getQueryParam('name');

  if (userName) {
    setCookie('userName', userName, 30); // Store for 30 days
  } else {
    userName = getCookie('userName');
  }

  if (userName) {
    const debugElement = document.getElementById('debug1');
    if (debugElement) {
      debugElement.textContent = `Hello, ${userName}!`;
    }
  }
});


//=============================================================================================