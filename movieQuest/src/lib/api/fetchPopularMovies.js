const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

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