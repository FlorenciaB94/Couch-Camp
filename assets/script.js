console.log(this);
var showResults = document.getElementById("results");
var searchButton = document.getElementById("search");
var input = document.getElementById("name");

var APIkey1 = "b2603b30013667b374cd4d50875144c1"


function getApi(event) {
event.preventDefault();
var movieTitle = input.value 
console.log(movieTitle);
  // testing example fetch request
  console.log(``)
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey1}&query=${movieTitle}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('');
    console.log(data);
    getMoviePlatforms(data.results[0].id);
  });
 
};
// get movie ID's for searching 
function getMoviePlatforms(movieID){
  fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=b2603b30013667b374cd4d50875144c1`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('');
    console.log(data);
  });
};
searchButton.addEventListener('click', getApi);
