'use strict';

//появление стрелки для прокрутки в начало сайта
const arrowAppearance = () => {
  const toTop = document.getElementById('totop');

  toTop.style.display = 'none';

  const moveToAnchor = item => {
    const blockID = item.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  document.addEventListener('scroll', () => {
    if (pageYOffset >= 620) {
      toTop.style.display = 'block';
    } else {
      toTop.style.display = 'none';
    }
  });

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('nav') && target.closest('a') || target.closest('#totop') || target.closest('.about') || target.closest('.for-clients')) {
      event.preventDefault();
      moveToAnchor(target.closest('a'));
    }
  });
};

export default arrowAppearance;