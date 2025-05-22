const slides = document.querySelectorAll('#slider li');
const dotsContainer = document.getElementById('dots');
let currentSlide = 0;
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
});

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);