$(document).ready(() => {
    // Attach a click event to the button #btn_translate
    $('#btn_translate').on('click', () => {
      // Language code
      const langCode = $('#language_code').val();
  
      $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, (data) => {
        // Display the translation in the <div id="hello">
        $('#hello').text(data.hello);
      });
    });
  });
