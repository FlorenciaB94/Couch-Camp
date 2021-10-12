console.log(this);
var movieNameElem = document.getElementById("movie-title");
var searchButton = document.getElementById("search");
var input = document.getElementById("name");

//key for TheMovieDatabase API
var APIkey1 = "b2603b30013667b374cd4d50875144c1"
//key for NYT reviews
var APIkey2 = "1eWGISZRchA7XQkb0Mw5vUd1Age2qfKE"

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
  return await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${APIkey1}`)
  .then(function (response) {
    return response.json();
  })
};
// Reviews API fetch call

async function getReviews(movieID) {

  return await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?&query=${movieID}&api-key=${APIkey2}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var reviewData = [];
    var reviews = data.results;
    for (var r = 0; r < results.length; r++){
      var review = reviews[r];
      movieData.push(
        {
          review: review.summary_short,
        })
    }
    return reviewData;

  });
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
<<<<<<< HEAD
  }
 
=======
 
}
console.log("---- movie data after getting streaming data");
console.log(movieData)
>>>>>>> 7b452bc93e49711eea89b769e18790ceea7e4a9a




//  var reviewData = await getMovies(input.value);

//  for (var r= 0; r < reviewData.length; r++){
//      var reviewsContent = await getMoviePlatforms(movieData[i].movieId);
//      if (reviewsContent.results.length === 0){
//          // do something
//        } else {
//            var reviewsContentInUS = reviewsContent.results["summary_short"];
//            var summary = reviewsContentInUS?.summary_short || [];
//            var review = [];
//            for (let s = 0; s < summary_short.length; s++){
//                review.push(summary[s].summary_short);
//              }
//              movieData[i].review = review;
//            }
//          }
//          console.log("-------movieData after reviewData")
//          console.log(movieData)
        
        
        // now we need to dynamically plug in  all the data we have in movideData to the cards on html
    
        var movieNameElem = document.getElementById("movie-title");
        movieNameElem.innerHTML =  movieData.movieTitle[i];
        console.log(movieNameElem);
      }
      



searchButton.addEventListener('click', fetchMovieData);