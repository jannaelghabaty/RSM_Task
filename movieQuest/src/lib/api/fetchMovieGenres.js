const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

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