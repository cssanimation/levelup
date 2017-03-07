/* Wait for the content to load then show the animations */

// Prepare the body tag by adding a "js-paused" class
document.body.className += " js-paused";

// Listen for when everything has loaded
window.addEventListener("load", showPage, false);

function showPage() {
  // Remove the "js-paused" class
  document.body.className = document.body.className.replace("js-paused","");
}