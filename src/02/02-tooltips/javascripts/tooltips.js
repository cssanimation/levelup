$(function() {

  $('.anchor-tooltip').each(function() {
    // Prepare the tooltip based on the "title" content
    var toolTipText = $(this).attr('title'),
        toolTip = $('<span class="title-container"></span>');
    toolTip.text(toolTipText);
    $(this).prepend(toolTip);
  });
  
});