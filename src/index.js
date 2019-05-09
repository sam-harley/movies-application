/**
 * es6 modules and imports
 */


const $ = require('jquery');

const Movie = require('./hello');

import {movieKey} from "./apikey";

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

const updatemovies = () => {
  getMovies().then((movies) => {
    console.log("Loaded Library");
    $("#main").html(Movie.cleardiv());
    movies.forEach(({Title, Poster, Plot, Ratings, Rated}) => {
      $("#main").append(Movie.createCard(Title, Poster, Plot, Ratings[0].Value, Rated));
    });

  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
};

updatemovies();

$("#addButton").click(function () {
  // Fetches api data via api url and apikey via external key const from apikey.js.
fetch(`http://www.omdbapi.com/?apikey=` + movieKey + `&t=` + $("#TitletoAdd").val())
// Converts data retrieved into JSON File type.
    .then(function(response) {return response.json();})
    // The process below is for coping api data to db.json for extended use as to not keep reusing the api key for the same movies.
    .then(function(myJson) {
      const AddMovie = myJson;
      const url = '/api/movies';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AddMovie)
      };
      fetch(url, options)
          .then(function () {
            updatemovies()
          })
          .catch();
    });
});