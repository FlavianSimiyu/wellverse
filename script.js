document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    const itemWidth = 180 + 48; // item width + gap
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    
    function moveNext() {
        currentIndex = (currentIndex + 1) % (items.length - 3);
        updateCarousel();
    }
    
    function movePrev() {
        currentIndex = (currentIndex - 1 + (items.length - 3)) % (items.length - 3);
        updateCarousel();
    }
    
    // Event Listeners
    nextButton.addEventListener('click', moveNext);
    prevButton.addEventListener('click', movePrev);
    
    // Auto-scroll
    const autoScrollInterval = setInterval(moveNext, 3000);
    
    // Pause auto-scroll on hover
    track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    track.addEventListener('mouseleave', () => setInterval(moveNext, 3000));
}); 