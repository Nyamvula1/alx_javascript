// #!/usr/bin/node

// const request = require('request');

// const movieId = process.argv[2];
// const apiUrl = `https://swapi.co/api/films/${movieId}/`;

// request(apiUrl, (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//     const movie = JSON.parse(body);
//     console.log(`Characters of Star Wars Episode ${movieId}: ${movie.title}`);
//     console.log('---------------------------');
//     movie.characters.forEach(characterUrl => {
//       request(characterUrl, (error, response, body) => {
//         if (!error && response.statusCode === 200) {
//           const character = JSON.parse(body);
//           console.log(character.name);
//         }
//       });
//     });
//   } else {
//     console.error('Error:', error || response.statusCode);
//   }
// });
const request = require('request');

const Id = process.argv[2];//movie to be passed in the terminal
const url = `https://swapi.dev/api/films/${Id}/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  const characters = data.characters;
  for (const character of characters) {
    request(character, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      const