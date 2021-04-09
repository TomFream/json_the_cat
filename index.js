const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc === null) {
    console.log('Error: Breed not found');
  } else {
    console.log(desc);
  }
});