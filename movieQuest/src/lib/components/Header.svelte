<!-- Header.svelte: Header component for the app -->
<script>
    // Props for the logo image source and alternative text
    export let logoSrc = '/Logo.jpg';
    export let altText =  'Movies App Logo';
</script>

<header>
     <!-- Logo section -->
    <div class="logo">
        <img src={logoSrc} alt={altText} />
    </div>
    <!-- Navigation menu -->
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/favorites">Favorites</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
</header>

<style>
    header {
        background-color: black;
        color: white;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  
    .logo img {
        width: 50px;
        height: 50px;
    }
  
    nav ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        padding: 0;
        margin: 0;
    }
  
    nav ul li {
        margin: 0;
    }
  
    nav ul li a {
        color: white;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }
  
    nav ul li a:hover {
        text-decoration: none;
        color: #FF6347;
    }
  
  </style>