/**
 * This is a JavaScript Module
 * usefull for encapsulating certain logic
 * into individual files
 *
 * This here holds all the logic for
 * communicating with our backend server
 * and exposes (exports) a set of functions
 * used by the other pages. Each of them
 * mapping to a specific functionality
 * identified by the design.
 *
 * Here they are a 1-to-1 mapping to
 * the Web Server we have setup.
 * But they could have consisted of
 * a different set if, say, we where
 * to combine data from multiple
 * different Web APIs.
 */

console.log("Movie API Module loaded");

// Due to how this is setup we are hardcoding the
// address the server is reachable on, in
// a production environment, this would have been
// lifted up and only passed in when deploying the
// applications. But this would require us to setup
// a build process, which is out of scope for now
const movieApiAddress = "http://localhost:5271";
const apiVersion = "/api/v1";
const url = movieApiAddress + apiVersion;

// Utilities

// This helper is created to standardize on
// how errors are handled, and other patterns
// we intend to use in conjuncture with our Web API
async function fetchWrapper(address, init) {
  // Try..Catch allows us to continue the rest of the program
  // if the communication with the server fails for some reason
  try {
    // Fetch might throw if network errors (no connection)
    const response = await fetch(address, init);

    // The server might respond with an error code (404, 40x, 50x)
    if (!response.ok) {
      return false;
    }

    // Response.json() might throw if encountering parsing errors
    const data = await response.json();

    // In case of sucess return the data
    return data;
  } catch (error) {
    console.error(error);
    // In case we fail return false
    return false;
  }
}

// API Wrappers
export async function createMovie(movie) {
  return fetchWrapper(url + "/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
}

export async function updateMovie(id, movie) {
  return fetchWrapper(url + "/movies/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
}

export async function deleteMovie(id) {
  return fetchWrapper(url + "/movies/" + id, {
    method: "DELETE",
  });
}

export async function getAllMovies() {
  return fetchWrapper(url + "/movies");
}

export async function getMovie(id) {
  return fetchWrapper(url + "/movies/" + id);
}
