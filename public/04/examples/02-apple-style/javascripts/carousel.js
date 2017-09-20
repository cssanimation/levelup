$(function() {
  // Set up the carousel's "state"
  var prevIndex = 2;
  var currentIndex = 0;
  var nextIndex = 1;
  var lastIndex = $('#carousel').find('.item').length - 1;

  // Actions to listen for
  $('#carousel').on('click', '.previous', showQuote);
  $('#carousel').on('click', '.next', showQuote);
  $('#carousel-pips').on('click', '.pip', showFromPip);

  // Generate pips
  generatePips();
  setLeftClass();

  // Cycle automatically
  var carouselRunning = true;
  var carouselRestartTimeout;

  delay = 5000;

  showNextQuote();

  // Set the carousel working
  var interval = setInterval(function() {
    if (carouselRunning) {
      showNextQuote();
    }
  }, delay);

  function showNextQuote() {
    // Calculate the indices needed to show the next quote
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateState(currentIndex);
  }

  function showQuote(event) {
    // Get the index of the clicked quote and show it
    if ($(event.target).hasClass('quote')) {
      var target = $(event.target);
    } else {
      var target = $(event.target).parent();
    }
    var index = $('.item').index(target);
    updateState(index);

    // Since this is by click, pause the automatic movement for a few seconds
    clearTimeout(carouselRestartTimeout);
    carouselRunning = false;
    carouselRestartTimeout = setTimeout(function() {
      carouselRunning = true;
    }, 10000);
  }

  function updateState(index) {
    // Calculates the previous and next indices, and updates the carousel
    prevIndex = index === 0 ? lastIndex : index - 1;
    currentIndex = index;
    nextIndex = index === lastIndex ? 0 : index + 1;

    updateCarouselPosition();
    setLeftClass();
    updatePips();
  }


  function updateCarouselPosition() {
    // Remove any previous, current, next classes
    $('#carousel').find('.previous').removeClass('previous');
    $('#carousel').find('.current').removeClass('current');
    $('#carousel').find('.next').removeClass('next');
    var allQuotes = $('#carousel').find('.item');
    $(allQuotes[prevIndex]).addClass('previous');
    $(allQuotes[currentIndex]).addClass('current');
    $(allQuotes[nextIndex]).addClass('next');
  }

  function generatePips() {
    // Add pips to the ul element in index.html
    var listContainer = $('#carousel-pips').find('ul');
    for (var i = lastIndex; i >= 0; i--) {
      var newPip = $('<li class="pip"></li>');
      $(listContainer).append(newPip);
    }
    updatePips();
  }

  function updatePips() {
    // Update the classes on the pips depending on the current indices
    $('#carousel-pips').find('.previous').removeClass('previous');
    $('#carousel-pips').find('.current').removeClass('current');
    $('#carousel-pips').find('.next').removeClass('next');
    var allPips = $('#carousel-pips').find('.pip');
    $(allPips[prevIndex]).addClass('previous');
    $(allPips[currentIndex]).addClass('current');
    $(allPips[nextIndex]).addClass('next');
  }

  function showFromPip(event) {
    // Helper for when someone clicks a pip
    var index = 0;
    while( (event.target = event.target.previousSibling) != null ) {
      index++;
    }
    updateState(index);
  }

  function setLeftClass() {
    
  }

  // Lastly, add a listener for situations where the browser is in another tab / not visible
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      carouselRunning = false;
    } else {
      carouselRunning = true;
    }
  });

});

