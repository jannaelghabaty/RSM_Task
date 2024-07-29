// searchMovie.js: A utility module for fetching movies by name from The Movie Database (TMDb) API

// Import the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;
/**
 * searchMovie
 *
 * Asynchronously searches for movies by their name using the TMDb API.
 *
 * @param {string} movieName - The name of the movie to search for.
 * @param {string} genreId - The ID of the genre to filter by.
 * * @param {boolean} includeAdult - Whether to include adult content in the results.
 * @returns {Promise<Array>} - A promise that resolves to an array of movie objects.
 *                             If an error occurs, an empty array is returned.
 */
export async function searchMovie(movieName, genreId, includeAdult) {
	let results = [];
	try {
		let url = 'https://api.themoviedb.org/3/';
		if (movieName && genreId) {
			let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}&include_adult=${includeAdult}`;
			const searchResponse = await fetch(searchUrl);
			const searchData = await searchResponse.json();
			results = searchData.results;
			if (results.length > 0)
				results = results.filter((movie) => movie.genre_ids.includes(parseInt(genreId)));
		} else if (movieName) {
			// If only movieName is present, use search endpoint
			url += `search/movie?api_key=${apiKey}&query=${movieName}&include_adult=${includeAdult}`;
			const response = await fetch(url);
			const data = await response.json();
			results = data.results;
		} else if (genreId) {
			// If only genreId is present, use discover endpoint
			url += `discover/movie?api_key=${apiKey}&with_genres=${genreId}&include_adult=${includeAdult}`;
			const response = await fetch(url);
			const data = await response.json();
			results = data.results;
		}
		return results;
	} catch (error) {
		console.error('Error:', error);
		return [];
	}
}
