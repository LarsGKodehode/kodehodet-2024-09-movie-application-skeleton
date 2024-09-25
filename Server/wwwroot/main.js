import * as movieApi from "./movie-api.js";

console.log("Loaded Movie Listings Page");

const movies = await movieApi.getAllMovies();

console.log(movies);
