const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error: request failed\n', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Error: Breed not found');
    return;
  }
  console.log(data[0].description);
});