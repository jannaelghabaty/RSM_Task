<script>
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <p>&copy; {currentYear} Movie Quest. All rights reserved.</p>
        <nav>
            <a href="https://www.linkedin.com/in/jannaelghabaty/" target="_blank" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.276c-.966 0-1.75-.792-1.75-1.763 0-.972.784-1.764 1.75-1.764s1.75.792 1.75 1.764c0 .971-.784 1.763-1.75 1.763zm13.5 12.276h-3v-5.568c0-1.334-.026-3.051-1.859-3.051-1.861 0-2.146 1.45-2.146 2.949v5.67h-3v-11h2.877v1.501h.041c.4-.756 1.377-1.552 2.834-1.552 3.03 0 3.588 1.993 3.588 4.584v6.467z"/></svg>
            </a>
            <a href="https://github.com/jannaelghabaty" target="_blank" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.415-4.033-1.415-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.763-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.311.467-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.824.576 4.765-1.587 8.199-6.084 8.199-11.384 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:janna.elghabaty@gmail.com" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.99-7.713h23.99l-11.99 7.713zm0 2.287l11.99-7.713v12.713h-23.99v-12.713l11.99 7.713z"/></svg>
            </a>
        </nav>
    </div>
</footer>

<style>
    footer {
        color: white;
    }

    .footer-content {
        margin: 0 auto;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav a {
        color: #bbb;
        margin: 0 10px;
        text-decoration: none;
    }

    nav a:hover {
        color: white;
    }

    svg {
        fill: currentColor;
        width: 1.5em;
        height: 1.5em;
    }
</style>