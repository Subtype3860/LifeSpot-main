const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = slides.clientWidth;

let currentSlide = 0;

function showSlide() {
  slides.style.transform = translateX(-${slideWidth * currentSlide}px);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.children.length - 1;
  }
  showSlide();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.children.length) {
    currentSlide = 0;
  }
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);