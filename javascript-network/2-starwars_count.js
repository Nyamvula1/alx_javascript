#!/usr/bin/node //tells the operating system that this script should be executed using the Node.js interpreter.
const request = require('request');//This line imports the request module, which allows us to make HTTP requests.
request(process.argv[2], function (error, response, body) {//This line makes a GET request to the URL provided as the first command-line argument (process.argv[2]). When the request completes, it executes a 
    //callback function with three arguments: error, response, and body.
  if (!error) {
    const results = JSON.parse(body).results;
    console.log(results.reduce((count, movie) => {
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1
        : count;
    }, 0));
  }
});