// Variables to control the slideshow
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let slideInterval = setInterval(showSlides, 4000); // Change slide every 4 seconds

// Function to display the current slide and hide others
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0'; // Start transition to hide the slide
        slide.style.zIndex = '0';
        if (index === slideIndex) {
            slide.style.zIndex = '1';
            slide.style.opacity = '1'; // Smooth transition to show the current slide
        }
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

// Initial call to display the first slide
showSlides();

// Optional: Pause slideshow on hover and resume on mouse leave
const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval); // Pause slideshow
});

slideshowContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(showSlides, 4000); // Resume slideshow
});

// CSS for smoother transitions
const slideStyles = document.createElement('style');
slideStyles.innerHTML = `
    .slide {
        transition: opacity 1s ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .slideshow-container {
        position: relative;
    }
`;
document.head.appendChild(slideStyles);
