'use strict';

//появление стрелки для прокрутки в начало сайта
const arrowAppearance = () => {
  const toTop = document.getElementById('totop');

  toTop.style.display = 'none';

  document.addEventListener('scroll', () => {
    if (pageYOffset >= 620) {
      toTop.style.display = 'block';
    } else {
      toTop.style.display = 'none';
    }
  });
};

export default arrowAppearance;