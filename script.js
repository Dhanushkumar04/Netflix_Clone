// script.js (Optional: Add interactivity later, e.g., carousel auto-scroll or modal functionality)
// Example: Auto-scroll the carousel
const carousel = document.querySelector('.movie-carousel');
let isScrolling = false;

setInterval(() => {
    if (!isScrolling) {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    }
}, 3000);

carousel.addEventListener('mouseover', () => (isScrolling = true));
carousel.addEventListener('mouseout', () => (isScrolling = false));
