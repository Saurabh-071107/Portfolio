// main.js - Minimal necessary JS for the static brutalist portfolio.
// The GSAP scroll logic has been removed as the page is now a static grid layout.

document.addEventListener("DOMContentLoaded", () => {
    // Implement smooth scrolling for internal navigation links.
    document.querySelectorAll('.nav-link, .nav-cta, .hero-actions a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const getHref = this.getAttribute('href');
            // Only apply smooth scroll if it's an internal # anchor
            if (getHref.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(getHref);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
