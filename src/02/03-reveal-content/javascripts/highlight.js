$(function() {

  $('.actions .option').hover(
    function() {
      $('.actions .option').removeClass('highlighted');
      $(this).addClass('highlighted');
    },
    function() {
      $('.actions .option').removeClass('highlighted');
      $(this).removeClass('highlighted');
      setTimeout(function() {
        if (!$('.option.highlighted').length) {
          $('.popular').addClass('highlighted');
        }
      }, 500);
    }); 
});