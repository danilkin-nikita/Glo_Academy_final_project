'use strict';

// слайдер карусель услуг
const servicesSlider = () => {
  const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide');
        

  let position = 0,
      slidesToShow = 5;

  const checkWindow = () => {
    if (window.innerWidth >= 1141) {
      slidesToShow = 5;
    } else if (window.innerWidth < 1141 && window.innerWidth >= 767) {
      slidesToShow = 3;
    } else if (window.innerWidth < 767 && window.innerWidth >= 500) {
      slidesToShow = 2;
    } else if (window.innerWidth < 479) {
      slidesToShow = 1;
    }
    
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove('active-services-slide');
    }
    for (let i = 0; i < slidesToShow; i++) {
      slide[i].classList.add('active-services-slide');
    }
  }

  const addActiveSlide = () => {
    
    for (let i = 0; i < slidesToShow; i++) {
      slide[i].classList.add('active-services-slide');
    }

    checkWindow();
  };

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    elem[index + slidesToShow].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index + slidesToShow].classList.add(strClass);
    elem[index].classList.remove(strClass);
  };

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('.next')) { 
      if (position < (slide.length - slidesToShow)) {
        nextSlide(slide, position, 'active-services-slide');
        position++; 
      }
    }
    if (target.matches('.prev')) {
      if (position > 0) {
        position--;
      }
      prevSlide(slide, position, 'active-services-slide');
    }
  });

  window.addEventListener('resize', () => {
    checkWindow()
  });

  addActiveSlide();
};

export default servicesSlider;