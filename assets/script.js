console.log(this);
var movieNameElem = document.getElementById("movie-title");
var searchButton = document.getElementById("search");
var input = document.getElementById("name");

var APIkey1 = "b2603b30013667b374cd4d50875144c1"


// Movies API fetch request
async function getMovies(movieTitle) {
  
  return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey1}&query=${movieTitle}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var movieData = [];  
    var movies = data.results;
    for (var i = 0; i< movies.length; i++ ){
      var movie = movies[i];
        movieData.push(
        {
          movieId: movie.id,
          movieTitle: movie.original_title,
        })
    }
     return movieData;
  });
};

// get movie ID's for searching 

async function getMoviePlatforms(movieID){
  return await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=b2603b30013667b374cd4d50875144c1`)

  .then(function (response) {
    return response.json();
  })
};

async function fetchMovieData(event) {
  event.preventDefault();
  // call getMovies function first
  var movieData = await getMovies(input.value);

  // then call getMoviePlatforms next
  for (var i = 0; i <  movieData.length; i++) {
    var streamingData = await getMoviePlatforms(movieData[i].movieId);
    if (streamingData.results.length === 0) {
      // do something
    } else {
      var streamingDataInUS = streamingData.results["US"];
      var rent = streamingDataInUS?.rent || [];
      var providers = [];
      for (let j = 0; j < rent.length; j++){
        providers.push(rent[j].provider_name)

      }
      movieData[i].providers = providers;

    }
  }
 


  // now we need to dynamically plug in  all the data we have in movideData to the cards on html

}


searchButton.addEventListener('click', fetchMovieData);