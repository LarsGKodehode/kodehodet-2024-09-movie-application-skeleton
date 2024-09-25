import * as movieApi from "../movie-api.js";

console.log("Loaded Movie Details Page");

// Messy way to extract the query parameter from the current URL
const movieId = Number(window.location.search.slice(1));

const movie = await movieApi.getMovie(movieId);

console.log(movie);
