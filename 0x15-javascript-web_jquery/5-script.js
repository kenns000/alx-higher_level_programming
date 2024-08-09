$(document).ready(() => {
    // Attach a click event handler to the #add_item div
    $('#add_item').on('click', () => {
      // Append a new <li> element with the text "Item" to the <ul class="my_list">
      $('ul.my_list').append('<li>Item</li>');
    });
  });
  
