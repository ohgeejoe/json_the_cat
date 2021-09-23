const { get } = require('request');
const request = require('request');
const breedName = process.argv[2]; //since the input from node will be in the 3 posiiton of the array
// console.log(breedName);

const getBreedDescription = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
    // console.log(typeof body);
   
    // console.log(data);
    // console.log(typeof data);
    if (error) {
      console.log(`Error! Something broke buddy. Heres what was passed to error ${error}`);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {

      console.log(breed.description);
    } else {
      console.log(`Failed to find breed ${breedName}`);
    }
   
  });
};

getBreedDescription(breedName);

