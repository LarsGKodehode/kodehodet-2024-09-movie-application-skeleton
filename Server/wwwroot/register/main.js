import * as movieApi from "../movie-api.js";

console.log("Loaded Movie Registration Page");

const newMovieData = {
  title: "Black Swan",
};

const movie = await movieApi.createMovie(newMovieData);

console.log(movie);
