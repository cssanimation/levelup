$(function() {
  // Set up the carousel's "state"
  window.previousCarouselIndex = 0;
  window.currentCarouselIndex = 1;
  window.nextCarouselIndex = 2;
  window.carouselLength = $('#quotes-carousel').find('.quote').length;

  // Actions to listen for
  $('#quotes-carousel').on('click', '.previous', showPrevQuoteClick);
  $('#quotes-carousel').on('click', '.next', showNextQuoteClick);
  $('#quotes-carousel-pips').on('click', '.pip', showFromPip);

  // Generate pips
  generatePips();

  // Cycle automatically
  window.carouselRunning = true;
  window.restartingCarousel = null;

  // Set the carousel working
  var interval = setInterval(function() {
    if (window.carouselRunning) {
      showNextQuote();
      updatePips();
    }
  }, 4000);

});

function showNextQuote() {
  // Calculate the indices needed to show the next quote
}

function showPreviousQuote() {
  // Calculate the indices needed to show the previous quote
}

function showQuoteByClick(index) {
  // Calculates the previous and next indices, and updates the carousel
  // Since this is by click, pause the automatic movement for a few seconds
}

function updateCarouselPosition() {
  // Update the carousel positions based on the "state"
}

function showNextQuoteClick() {
  // Helper for when someone clicks the next quote
}

function showPrevQuoteClick() {
  // Helper for when someone clicks the previous quote
}

function restartAutomatic() {
  // Set up a timer that will bring back the automatic scrolling after 10 seconds
}

function generatePips() {
  // Add pips to the ul element in index.html
  // Update the pips classes to represent the "state"
}

function updatePips() {
  // Update the classes on the pips depending on the current indices
}

function setClassOnPip(index, className) {
  // Helper function to set a class on a pip by clearing other instances of the class
}

function showFromPip(e) {
  // Helper for when someone clicks a pip
}

function setLeftClass() {
  // For when we want the item to appear from the left side if it's "earlier" in the list
}
