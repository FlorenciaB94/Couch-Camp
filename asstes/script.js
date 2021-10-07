console.log(this);
var showResults = document.getElementById("#results");
var searchButton = document.getElementById("#search");


var APIkey1 = ""

function getApi() {

  // testing example fetch request
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  
  fetch(requestUrl)
  .then(res => console.log(res));
  
  
  
  
  
  // (function (response) {
    // return response.json();
  // })
  // .then(function (data) {
  //   console.log(data)
  // })
};


// searchButton.addEventListener('click', getApi);
