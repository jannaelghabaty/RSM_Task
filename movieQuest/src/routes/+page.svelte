<!-- +page.svelte: Homepage of the app displaying popular movies -->
<script>
	import { onMount } from 'svelte';
	import { fetchPopularMovies, fetchPopularMoviesPosters } from '../lib/api/fetchPopularMovies';
	import { searchMovie } from '../lib/api/searchMovie';
	import { fetchMovieGenres, fetchMovieGenresByID } from '../lib/api/fetchMovieGenres';

	let movies = [];
	let moviesPosters = [];
	let originalMoviesPosters = [];
	let searchQuery = '';
	let movieGenres = [];
	let genreId = '';

	// Fetch popular movies, posters, and genres on component mount
	onMount(async () => {
		movies = await fetchPopularMovies();
		moviesPosters = await fetchPopularMoviesPosters();
		originalMoviesPosters = [...moviesPosters];
		movieGenres = await fetchMovieGenres();
		console.log(movieGenres);
	});

	// Search for movies by name or genre
	async function handleSearch() {
		if (searchQuery.trim() === '' && genreId === '') {
			moviesPosters = [...originalMoviesPosters];
		} else {
			movies = await searchMovie(searchQuery, genreId);
			moviesPosters = movies
				.filter((movie) => movie.poster_path)
				.map((movie) => ({
					posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
				}));
		}
	}

	async function handleSearchByGenres(event) {
		genreId = event.target.value;
		handleSearch();
	}

	// Functions for scrolling movie posters horizontally
	function scrollLeft() {
		const mainCard = document.querySelector('.main-card');
		if (mainCard) {
			const visibleWidth = mainCard.offsetWidth;
			mainCard.scrollBy({ left: -visibleWidth, behavior: 'smooth' });
		}
	}

	function scrollRight() {
		const mainCard = document.querySelector('.main-card');
		if (mainCard) {
			const visibleWidth = mainCard.offsetWidth;
			mainCard.scrollBy({ left: visibleWidth, behavior: 'smooth' });
		}
	}
</script>

<!-- Main content for Movie Quest app -->
<!-- Title and Subtitle -->
<h1 class="title">Movie Quest</h1>
<h2 class="sub-title">Find Movies, TV Shows, and more</h2>

<!-- Search and Filter Section -->
<div class="search-container">
	<input
		type="text"
		class="search-bar"
		bind:value={searchQuery}
		on:input={handleSearch}
		placeholder="Search..."
	/>
	<select class="drop-down" on:change={handleSearchByGenres}>
		<option value="">Select Genre</option>
		{#each movieGenres as genre}
			<option value={genre.id}>{genre.name}</option>
		{/each}
	</select>
</div>

<!-- Movie Posters Display Section -->
<div class="main-card-container">
	<button class="scroll-button left" on:click={scrollLeft}>&#10094;</button>
	<div class="main-card">
		{#each moviesPosters as poster}
			<div class="single-card">
				<img src={poster.posterUrl} alt="movie-poster" />
			</div>
		{/each}
	</div>
	<button class="scroll-button right" on:click={scrollRight}>&#10095;</button>
</div>

<style lang="scss">
	.title {
		display: flex;
		justify-content: center;
	}

	.sub-title {
		display: flex;
		justify-content: center;
		padding-top: 15px;
		font-weight: 300;
		font-size: 1.2rem;
	}

	.search-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 20px;
		gap: 30px;
	}

	.search-bar {
		width: 100%;
		max-width: 600px;
		padding: 10px 20px;
		border-radius: 25px;
		border: 2px solid #ccc;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-size: 16px;
		outline: none;
	}

	.search-bar:focus {
		border-color: #ff6347;
	}

	.main-card-container {
		display: flex;
		align-items: center;
		overflow: hidden;
		position: relative;
		background-color: #3c3c3c;
		gap: 20px;
		padding: 30px;
		margin-top: 30px;
	}

	.main-card {
		display: flex;
		overflow-x: auto;
		scroll-behavior: smooth;
		overflow-y: hidden;
	}

	.single-card,
	img {
		width: 200px;
		height: 300px;
		transition:
			width 0.3s ease,
			height 0.3s ease;
	}

	.single-card {
		flex: 0 0 auto;
		margin: 0 10px;
		display: flex;
		justify-content: center;
	}

	.single-card:hover img {
		width: 210px;
		height: 310px;
	}

	.scroll-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		z-index: 1;
	}

	.scroll-button.left {
		left: 10px;
	}

	.scroll-button.right {
		right: 10px;
	}

	.scroll-button:hover {
		color: red;
	}

	.drop-down {
		appearance: none;
		width: 10%;
		padding: 10px;
		font-family: Arial, sans-serif;
		border: 2px solid #ccc;
		border-radius: 25px;
		background-color: #fff;
		color: #333;
		cursor: pointer;
	}

	.drop-down:hover {
		border-color: #ff6347;
	}

	.drop-down:focus {
		outline: none;
		border-color: #ff6347;
	}

	.drop-down option {
		color: #333;
	}
</style>
