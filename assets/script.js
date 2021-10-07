console.log(this);
var showResults = document.getElementById("#results");
var searchButton = document.getElementById("#search");


var APIkey1 = ""

function getApi() {

  // testing example fetch request
  fetch('https://api.github.com/orgs/twitter/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
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
