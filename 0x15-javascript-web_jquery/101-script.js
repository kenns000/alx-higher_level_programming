$(document).ready(() => {
    // Add a new <li> element to the list when #add_item is clicked
    $('#add_item').on('click', () => {
      $('ul.my_list').append('<li>Item</li>');
    });
  
    // Remove the last <li> element from the list when #remove_item is clicked
    $('#remove_item').on('click', () => {
      $('ul.my_list li:last-child').remove();
    });
  
    // Clear all <li> elements from the list when #clear_list is clicked
    $('#clear_list').on('click', () => {
      $('ul.my_list').empty();
    });
  });
