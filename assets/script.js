console.log(this);
var showResults = document.getElementById("#results");
var searchButton = document.getElementById("#search");


var APIkey1 = ""

function getApi() {

  // testing example fetch request
  fetch('')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('');
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
