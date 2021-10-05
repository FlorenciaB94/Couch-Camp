var APIkey1 = "35fec87f63msh0ed1ee9p19d869jsnd2a13d4daaf9"

fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": APIkey1,
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});