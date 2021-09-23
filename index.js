const { getBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; //since the input from node will be in the 3 posiiton of the array

getBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});