const request = require('request');

// Check if movie ID is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Usage: node get_movie_title.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API to retrieve movie details
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    process.exit(1);
  }

  // Parse the response body
  const movie = JSON.parse(body);

  // Display the title of the movie
  console.log('Title:', movie.title);
});
// !/usr/bin/node
// const request = require('request');
// let url = 'http://swapi.co/api/films/' + process.argv[2];
// request(url, function (error, response, body) {
//   console.log(error || JSON.parse(body).title);
// });