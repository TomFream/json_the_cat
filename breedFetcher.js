const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let desc;
    if (error) {
      desc = null;
    }
  
    if (data[0]) {
      desc = data[0].description;
    } else desc = null;

    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };

