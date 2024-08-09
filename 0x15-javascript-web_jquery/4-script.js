$(document).ready(() => {
    // Attach a click event handler to the toggle_header
    $('#toggle_header').on('click', () => {
      // Toggle the class between 'red' and 'green' on the <header> element
      if ($('header').hasClass('red')) {
        $('header').removeClass('red').addClass('green');
      } else {
        $('header').removeClass('green').addClass('red');
      }
    });
  });
