// fetchMoviesGenres.js: Module for fetching movie genres and movies by genre from TMDb API

// Import the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;

// Define the API endpoint for fetching genres
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

/**
 * fetchMovieGenres
 * 
 * Fetches the list of movie genres from the TMDb API.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of genre objects.
 *                             Returns an empty array if an error occurs.
 */
export async function fetchMovieGenres() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

/**
 * fetchMovieGenresByID
 * 
 * Fetches movies based on a specific genre ID from the TMDb API.
 * 
 * @param {number} genreId - The ID of the genre to filter movies by.
 * @returns {Promise<Array>} - A promise that resolves to an array of movie objects.
 *                             Returns an empty array if an error occurs.
 */
export async function fetchMovieGenresByID(genreId) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }