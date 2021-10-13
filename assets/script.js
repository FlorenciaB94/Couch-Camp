console.log(this);
var searchButton = document.getElementById("search");
var input = document.getElementById("name");
var cardRow = document.getElementById('card_row');

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
      for (var i = 0; i < 6; i++) {
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
async function getMoviePlatforms(movieID) {
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
      var linksToReviews = [];
      console.log(data);
      var reviews = data.results || [];
      for (var r = 0; r < reviews.length; r++) {
        var review = reviews[r].link.url;
        linksToReviews.push(review);

      }
      console.log(linksToReviews);
      return linksToReviews;
    });
};





async function fetchMovieData(event) {
  event.preventDefault();
  cardRow.innerHTML = "";
  // call getMovies function first
  var movieData = await getMovies(input.value);

  // then call getMoviePlatforms next
  for (var i = 0; i < 6; i++) {
    var streamingData = await getMoviePlatforms(movieData[i].movieId);
    if (streamingData.results.length === 0) {
      // do something
    } else {
      var streamingDataInUS = streamingData.results["US"];
      var rent = streamingDataInUS?.rent || [];
      var providers = [];
      for (let j = 0; j < rent.length; j++) {
        providers.push(rent[j].provider_name);

      }
      movieData[i].providers = providers;

    }

  }

  console.log("---- movie data after getting streaming data");
  console.log(movieData)

  for (var r = 0; r < 6; r++) {
    console.log("------------review Data stuff");
    console.log(movieData[r]);
    var reviewsContent = await getReviews(movieData[r].movieTitle);
    console.log(movieData);
    movieData[r].review = reviewsContent;


    // now we need to dynamically plug in  all the data we have in movieData to the cards on html


    cardRow.innerHTML += `<div class="movie_card column"><div class="callout"><h4>${movieData[r].movieTitle}</h4><div><h4>You can find this movie on:</h4><p class="lead" id="providers-font">${movieData[r].providers}</h4></div><div class="reviews_decoration"></p><a href="${movieData[r].review[0]}" target="_blank"><p>REVIEW</p></a></div></div></div>`;
  }  
}
searchButton.addEventListener('click', fetchMovieData);