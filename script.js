let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.getElementById('carouselWrappe');
    const slideWidth = document.querySelector('.carousel-ite').clientWidth;
    currentIndex = index;

    wrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-ite').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-ite').length;

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
setInterval(nextSlide, 10000);
  