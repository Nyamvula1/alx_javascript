// #!/usr/bin/node
// const request = require('request');
// const url = 'https://swapi.co/api/films/' + process.argv[2];
// request(url, function (error, response, body) {
//   if (!error) {
//     const characters = JSON.parse(body).characters;
//     characters.forEach((character) => {
//       request(character, function (error, response, body) {
//         if (!error) {
//           console.log(JSON.parse(body).name);
//         }
//       });
//     });
//   }
// });
#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.co/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movie = JSON.parse(body);
    console.log(`Characters of Star Wars Episode ${movieId}: ${movie.title}`);
    console.log('---------------------------');
    movie.characters.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  } else {
    console.error('Error:', error || response.statusCode);
  }
});