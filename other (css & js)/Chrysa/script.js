// Developed by: CHRYSA ARAMPATZI

    // Hover effects on explore cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });


 // Parallax effect for backround image
 window.addEventListener('scroll', function () {
    const welcomeBg = document.querySelector('.welcome-bg');
    
    const scrollY = window.scrollY; // Current scroll position

    // Parallax for welcome background
    if (welcomeBg) {
        welcomeBg.style.transform = `translateY(${scrollY * 0.5}px)`; // Moves slower for parallax
    }

});

//testimonials
//slide in-out animation 

// Ensure this runs after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        if (index === currentSlide) return; // Prevent unnecessary transitions if same slide

        const isNextSlide = index > currentSlide;

        // Set the initial position of the new slide based on direction
        slides[index].style.transition = 'none'; // Disable transition initially
        slides[index].style.transform = isNextSlide ? 'translateX(100%)' : 'translateX(-100%)'; // Off-screen position

        // Force reflow to apply the initial position
        void slides[index].offsetWidth;

        // Slide-out current slide
        slides[currentSlide].style.transition = 'transform 0.6s ease-in-out';
        slides[currentSlide].style.transform = isNextSlide ? 'translateX(-100%)' : 'translateX(100%)'; // Slide out

        // Slide-in new slide
        slides[index].style.transition = 'transform 0.6s ease-in-out';
        slides[index].style.transform = 'translateX(0)'; // Slide in to center
        slides[index].classList.add('active'); // Mark the new slide as active

        setTimeout(() => {
            slides[currentSlide].classList.remove('active'); // Remove active from the old slide
            currentSlide = index; // Update current slide index
        }, 600); // Matches CSS transition duration

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
        /* Auto-Slide: */
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 6000);

    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index); // Trigger the slide change
        });
    });
});
