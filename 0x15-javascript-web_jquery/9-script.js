$(document).ready(() => {
    // Perform GET request to fetch the translation of "hello"
    $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', (data) => {
      // Update the text of the id="hello" with the translated "hello"
      $('#hello').text(data.hello);
    });
  });
