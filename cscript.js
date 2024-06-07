const carousel = document.querySelector('.carousel'); // Select the carousel container
const slides = carousel.querySelectorAll('.slide'); // Get all slide elements

let currentSlide = 0; // Track current slide index

// Function to show a specific slide
function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    currentSlide = slideIndex;
}

// Function to automate slide change
function autoplay() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide if at the end
    showSlide(currentSlide);
}

// Set autoplay interval (e.g., change slide every 3 seconds)
setInterval(autoplay, 3000);

// Add navigation controls (optional) using Javascript to handle user interaction (e.g., clicking arrows to change slides)
