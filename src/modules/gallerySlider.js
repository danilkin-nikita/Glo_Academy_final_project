'use strict';

//слайдер галереи
const gallerySlider = () => {
  const slider = document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide'),
        dots = slider.querySelector('.slider-dots');

  let currentSlide = 0,
      interval;

  for (let i = 0; i < slide.length; i++) {
    const newDot = document.createElement('li');
    newDot.className = 'dot';
    dots.append(newDot);
  }

  const dot = document.querySelectorAll('.dot');
  dot[0].className = 'dot slick-active';

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'gallery-active-slide');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
        currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'gallery-active-slide');
    nextSlide(dot, currentSlide, 'slick-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
      clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.slider-arrow, .dot')) {
        return;
    }

    prevSlide(slide, currentSlide, 'gallery-active-slide');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.next')) {
        currentSlide++;
    } else if (target.matches('.prev')) {
        currentSlide--;
    } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
            if (elem === target) {
                currentSlide = index;
            }
        });
    }

    if (currentSlide >= slide.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'gallery-active-slide');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', event => {
      if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
          stopSlide();
      }
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
        startSlide();
    }
  });

  startSlide();
}

export default gallerySlider;