const { get } = require('request');
const breedName = process.argv[2];
const request = require('request');

// console.log(breedName);

const getBreedDescription = function(breedName, callback) {
  let catApiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(catApiUrl, function(error, response, body) {
    // console.log(typeof body);
   
    // console.log(data);
    // console.log(typeof data);
    if (error) {
      callback(`Error! Something broke buddy. Heres what was passed to error ${error}`,null); // needs to be in scope of getBreedDescription
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) { //need to add callback
      // let breedDescp = breed.description;
      // console.log(breed.description);

      callback(null,breed.description);

    } else {
      callback(`Failed to find breed ${breedName}`,null);
      
    }
   
  });
};
 

module.exports = { getBreedDescription };