'use strict';

// слайдер карусель услуг
const servicesSlider = () => {
  const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide'),
        sliderBtn = slider.querySelectorAll('.slider-arrow');

  let position = 0,
      slidesToShow = 5;

  const checkWindow = () => {
    position = 0;

    if (window.innerWidth >= 1200) {
      slidesToShow = 5;
      sliderBtn.forEach(item => {
        item.style.display = 'none';
      });
    } else {
      sliderBtn.forEach(item => {
        item.style.display = 'block';
      })
      if (window.innerWidth < 1200 && window.innerWidth >= 767) {
          slidesToShow = 4;
        } else if (window.innerWidth < 767 && window.innerWidth >= 479) {
          slidesToShow = 2;
        } else if (window.innerWidth < 479) {
          slidesToShow = 1;
        }
    }
    
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove('active-services-slide');
    }
    for (let i = 0; i < slidesToShow; i++) {
      slide[i].classList.add('active-services-slide');
    }
    checkBtn();
  };

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

  const checkBtn = () => {
    sliderBtn.forEach(item => {
      item.style.display = 'block';
    });
    if (position === (slide.length - slidesToShow)) {
        sliderBtn[1].style.display = 'none';
    }
    if (position === 0) {
      sliderBtn[0].style.display = 'none';
    }
  };

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('.next')) { 
      if (position < (slide.length - slidesToShow)) {
        nextSlide(slide, position, 'active-services-slide');
        position++;
      }
      checkBtn();
    }
    if (target.matches('.prev')) {
      if (position > 0) {
        position--;
      }
      prevSlide(slide, position, 'active-services-slide');
      checkBtn();
    }
  });

  window.addEventListener('resize', () => {
    checkWindow();
  });

  addActiveSlide();
};

export default servicesSlider;