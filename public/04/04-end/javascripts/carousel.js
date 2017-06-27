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
  if (window.currentCarouselIndex === window.carouselLength - 1) {
    window.currentCarouselIndex = 0;
  } else {
    window.currentCarouselIndex++;
  }
  showQuoteByClick(window.currentCarouselIndex);
}

function showPreviousQuote() {
  // Calculate the indices needed to show the previous quote
  if (!window.currentCarouselIndex) {
    window.currentCarouselIndex = window.carouselLength - 1;
  } else {
    window.currentCarouselIndex--;
  }
  showQuoteByClick(window.currentCarouselIndex);
}

function showQuoteByClick(index) {
  // Calculates the previous and next indices, and updates the carousel
  var prevIndex = index === 0 ? window.carouselLength - 1 : index - 1;
  var nextIndex = index === window.carouselLength - 1 ? 0 : index + 1;

  window.previousCarouselIndex = prevIndex;
  window.currentCarouselIndex = index;
  window.nextCarouselIndex = nextIndex;

  updateCarouselPosition();
  setLeftClass();
  updatePips();

  // Since this is by click, pause the automatic movement for a few seconds
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  restartAutomatic();
}

function updateCarouselPosition() {
  var allQuotes = $('#quotes-carousel').find('.quote');
  // Remove any previous, current, next classes
  $('#quotes-carousel').find('.previous').removeClass('previous');
  $('#quotes-carousel').find('.current').removeClass('current');
  $('#quotes-carousel').find('.next').removeClass('next');
  $(allQuotes[window.previousCarouselIndex]).addClass('previous');
  $(allQuotes[window.currentCarouselIndex]).addClass('current');
  $(allQuotes[window.nextCarouselIndex]).addClass('next');
}

function showNextQuoteClick() {
  // Helper for when someone clicks the next quote
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showNextQuote();
  restartAutomatic();
}

function showPrevQuoteClick() {
  // Helper for when someone clicks the previous quote
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showPreviousQuote();
  restartAutomatic();
}

function restartAutomatic() {
  // Set up a timer that will bring back the automatic scrolling after 10 seconds
  clearTimeout(window.restartingCarousel);
  window.restartingCarousel = setTimeout(function() {
    window.carouselRunning = true;
  }, 10000);
}

function generatePips() {
  // Add pips to the ul element in index.html
  var listContainer = $('#quotes-carousel-pips').find('ul');
  for (var i = window.carouselLength - 1; i >= 0; i--) {
    var newPip = $('<li class="pip"></li>');
    $(listContainer).append(newPip);
  }
  updatePips();
}

function updatePips() {
  // Update the classes on the pips depending on the current indices
  var allPips = $('#quotes-carousel-pips').find('.pip');
  $(allPips).each(function(index, item) {
    if (index === window.previousCarouselIndex) {
      setClassOnPip(index, 'previous');
    } else if (index === window.currentCarouselIndex) {
      setClassOnPip(index, 'current');
    } else if (index === window.nextCarouselIndex) {
      setClassOnPip(index, 'next');
    }
  });
}

function setClassOnPip(index, className) {
  // Helper function to set a class on a pip by clearing other instances of the class
  var allPips = $('#quotes-carousel-pips').find('.pip');
  $('#quotes-carousel-pips').find('.pip').removeClass(className);
  $(allPips[index]).addClass(className);
}

function showFromPip(e) {
  // Helper for when someone clicks a pip
  var i = 0;
  while( (e.target = e.target.previousSibling) != null ) {
    i++;
  }
  showQuoteByClick(i);
}

function setLeftClass() {
  // For when we want the item to appear from the left side if it's "earlier" in the list
  var allQuotes = $('#quotes-carousel').find('.quote');
  // Clear any previous "left" item
  $('.quote.left').removeClass('left');
  if (window.previousCarouselIndex > 0) {
    $(allQuotes[window.previousCarouselIndex - 1]).addClass('left');
  } else {
    // It's the first item, so add "left" to the last in the list
    $(allQuotes[allQuotes.length - 1]).addClass('left');
  }
}
