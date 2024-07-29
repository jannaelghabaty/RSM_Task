<!-- +layout.svelte: Layout component for the app -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- This layout component includes a header, main content area, and footer -->
<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	/* Import Google Fonts and global styles */
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@700&display=swap');
	@import '../styles/global.css';

	/* Set global styles for the HTML and body */
	:global(html, body) {
		margin: 0;
		padding: 0;
		background-color: black;
		font-family: 'Roboto', sans-serif;
		color: #f1f1f1;
		overflow-x: hidden;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
	}
</style>
