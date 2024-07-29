// searchMovieByName.js: A utility module for fetching movies by name from The Movie Database (TMDb) API

// Import the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;
/**
 * searchMovieByName
 * 
 * Asynchronously searches for movies by their name using the TMDb API.
 * 
 * @param {string} movieName - The name of the movie to search for.
 * @returns {Promise<Array>} - A promise that resolves to an array of movie objects.
 *                             If an error occurs, an empty array is returned.
 */
export async function searchMovieByName(movieName) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
}