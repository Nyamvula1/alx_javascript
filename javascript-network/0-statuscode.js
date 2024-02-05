const request = require('request');

// Check if the URL is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Usage: node get_status.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Make a GET request using the 'request' module
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Display the status code
  console.log(`code: ${response.statusCode}`);
});