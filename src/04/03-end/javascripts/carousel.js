$(function() {
  // Set up the carousel's "state"
  window.previousCarouselIndex = 0;
  window.currentCarouselIndex = 1;
  window.nextCarouselIndex = 2;
  window.carouselLength = $('#quotes-carousel').find('.quote').length;

  // Actions to listen for
  $('#quotes-carousel').on('click', '.previous', showQuote);
  $('#quotes-carousel').on('click', '.next', showQuote);
  $('#quotes-carousel-pips').on('click', '.pip', showFromPip);

  // Generate pips
  generatePips();
  setLeftClass();

  // Cycle automatically
  window.carouselRunning = true;

  // Set the carousel working
  var interval = setInterval(function() {
    if (window.carouselRunning) {
      showNextQuote();
    }
  }, 4000);

});

function showNextQuote() {
  // Calculate the indices needed to show the next quote
}

function showQuote() {
  // Get the index of the clicked quote and show it
}

function showQuoteByIndex(index) {
  // Calculates the previous and next indices, and then updates the position
}


function updateCarouselPosition() {
  // Update the carousel depending on the "state"
}

function generatePips() {
  // Add pips to the ul element in index.html
}

function showFromPip(event) {
  // Helper for when someone clicks a pip
}

function updatePips() {
  // Update the classes on the pips depending on the current indices
}

function setLeftClass() {
  // For when we want the item to appear from the left side if it's "earlier" in the list
}
