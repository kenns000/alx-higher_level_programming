$(document).ready(() => {
    // Attach a click event handler to the #update_header div
    $('#update_header').on('click', () => {
      // Update the text of the <header> element to "New Header!!!"
      $('header').text('New Header!!!');
    });
  });
