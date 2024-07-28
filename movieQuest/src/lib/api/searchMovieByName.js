const apiKey = import.meta.env.VITE_API_KEY;

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