$(document).ready(() => {
    // Perform GET request to fetch the list of movies
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', (data) => {
      // Loop through the movies and write the title to the list
      data.results.forEach(movie => {
        $('#list_movies').append(`<li>${movie.title}</li>`);
      });
    });
  });
