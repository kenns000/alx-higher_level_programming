$(document).ready(() => {
  function fetchTranslation() {
    const langCode = $('#language_code').val();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`;

    $.get(proxyUrl + apiUrl, (data) => {
      $('#hello').text(data.hello);
    });
  }

  // Fetch translation on button click
  $('#btn_translate').on('click', fetchTranslation);

  // Fetch translation on Enter key press
  $('#language_code').on('keypress', (event) => {
    if (event.key === 'Enter') {
      fetchTranslation();
    }
  });
});

