let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initial display
showSlide(slideIndex);