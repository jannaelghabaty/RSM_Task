// fetchPopularMovies.js: Module for fetching popular movies and their posters from TMDb API

// Import the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;

// Define the API endpoint and base URL for images
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

/**
 * fetchPopularMovies
 * 
 * Fetches a list of popular movies from the TMDb API.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of popular movie objects.
 *                             Returns an empty array if an error occurs.
 */
export async function fetchPopularMovies() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

/**
 * fetchPopularMoviesPosters
 * 
 * Fetches the poster URLs and titles of popular movies.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of objects containing movie titles and poster URLs.
 *                             Returns an empty array if an error occurs.
 */
export async function fetchPopularMoviesPosters() {
  try {
    const movies = await fetchPopularMovies();
    const posters = movies.map(movie => ({
      title: movie.title,
      posterUrl: `${imageBaseUrl}${movie.poster_path}`,
    }));
    return posters;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}