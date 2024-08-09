$(document).ready(() => {
    // Perform GET request to fetch the character data
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', (data) => {
      // Update the text of the id="character" with the character name
      $('#character').text(data.name);
    });
  });
