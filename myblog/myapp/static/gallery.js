let slideIndex = 1; // Start with the first slide

function showSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n > slides.length) { slideIndex = 1; } // Loop back to first slide if exceeding length
    if (n < 1) { slideIndex = slides.length; } // Loop to last slide if going back from first

    // Hide all slides and then show the targeted one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; 
        slides[i].style.display = "none"; // Added for consistency with opacity
    }
    slides[slideIndex - 1].style.display = "block"; 
    slides[slideIndex - 1].style.opacity = 1;
}

function nextSlide() {
    showSlide(slideIndex += 1); // Increment slideIndex then show the slide
}

function prevSlide() {
    showSlide(slideIndex -= 1); // Decrement slideIndex then show the slide
}

document.addEventListener('DOMContentLoaded', () => showSlide(slideIndex)); // Initialize the slider
