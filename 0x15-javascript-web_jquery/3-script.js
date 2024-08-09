$(document).ready(() => {
  // Attach a click event to the red_header
  $('#red_header').on('click', () => {
    // Add the class 'red' to the <header> element
    $('header').addClass('red');
  });
});

