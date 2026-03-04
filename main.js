
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav-link, .nav-cta, .hero-actions a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const getHref = this.getAttribute('href');
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

