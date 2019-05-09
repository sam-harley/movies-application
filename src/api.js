module.exports = {
  getMovies: () => {
    console.log("Loading Library...");
    return fetch('/api/movies')
      .then(response => response.json());
  }
};
// $("")
// fetch('/api/movies',)
//     .then()
//


// c6defae8
// http://www.omdbapi.com/?apikey=c6defae8&t=Guardians+of+the+galaxy

    // fetch('http://www.omdbapi.com/?apikey=c6defae8&t=Guardians+of+the+galaxy')
    //     .then(response => console.log(response))
    //     .catch(error => console.error(error));