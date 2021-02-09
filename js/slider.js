const slideContainer = document.querySelector('#banner .banner-container');
const slide = document.querySelector('#banner .slide-container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const interval = 10000;
let slideId;

let slides = document.querySelectorAll('#banner .slide');
let index = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(-${slideWidth*index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
}

const getSlides = () => document.querySelectorAll('#banner .slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if(slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(-${slideWidth*index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(-${slideWidth*index}px)`;
  }
})

const moveToNextSlide = () => {
  slides = getSlides();
  if(index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(-${slideWidth*index}px)`;
  slide.style.transition = '1s';
}

const moveToPreviousSlide = () => {
  slides = getSlides();
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(-${slideWidth*index}px)`;
  slide.style.transition = '1s';
}

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
})

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);


startSlide();