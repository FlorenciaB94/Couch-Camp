console.log(this);
var showResults = document.getElementById("#results");
var searchButton = document.getElementById("#search");


var APIkey1 = "&appid=35fec87f63msh0eb478548ed1ee9p19d869jsnd2a13d4daaf9"

function getApi() {

  // testing example fetch request
  fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Moive Shown in:');
    console.log(data);
  });

  
  
  
  
  // (function (response) {
    // return response.json();
  // })
  // .then(function (data) {
  //   console.log(data)
  // })
};
getApi();

// searchButton.addEventListener('click', getApi);
