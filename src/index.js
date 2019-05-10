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
    movies.forEach(({Title, Poster, Plot, Ratings, Rated, id,Production,Runtime,Released,Genre,Director}) => {
      $("#main").append(Movie.createCard(Title, Poster, Plot, Ratings[0].Value, Rated, id,Production,Runtime,Released,Genre,Director));
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
          .then(updatemovies)
          })
          .catch();
    });


$(document).on("click",".trash",function () {
      let Theid = $(this).attr("id");
      const url = '/api/movies/' + Theid;
      const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      };
      fetch(url, options)
          .then(updatemovies)
  });

const trash = document.getElementsByClassName(".trash");

$(document).on("click",".butthole",function () {
    let TheId = $(this).attr("id");
    const url = '/api/movies/' + TheId;
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    };
    fetch(url, options)
        .then(updatemovies)
});

fetch('/api/movies/6')
    .then(function (response) {
        return response.json();
    })
    .then(function (newJson) {
        console.log(JSON.stringify(newJson));
    });


        $(document).on('click', '.favorite', function () {
            console.log('TESTEST');
            fetch('/api/movies/')
                .then(function (response) {
                    return response.json();
                })
                .then(function (newJson) {
                    console.log(newJson);
                    const userEdit = newJson;
                    const url = '/api/movies/' + [$(this).parent("div").attr("id")];
                    const options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userEdit),
                    };
                    fetch(url, options)
                        .then(upDateInfo)
                });
        });


        $("#clapper").click(function () {
            if ($(".navBar").css("top") === "-130px") {
                $(".navBar").css("top", "0");
                console.log("hello");
                $("#clapper").attr("src", "img/blackclapper.png")
            } else {
                $(".navBar").css("top", "-130px");
                $("#clapper").attr("src", "img/whiteclapper.png")
            }
        });

