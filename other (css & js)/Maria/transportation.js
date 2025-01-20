//  Developed by: Maria Bosi

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');

    function updateCarousel(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));

        carouselItems[index].classList.add('active');
        carouselDots[index].classList.add('active');
    }

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
});
