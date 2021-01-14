'use strict';

//бургер меню (при экране меньше чем 768 px)
const smallScreenNavigation = () => {
  const burgerBtn = document.querySelector('.hidden-large'),
        topMenu = document.querySelector('.top-menu'),
        navMenu = document.querySelector('.hidden-small'),
        popupMenu = document.querySelector('.popup-menu');

  if (screen.width < 768) {
    burgerBtn.style.display = 'block';
    navMenu.style.display = 'none';

    document.addEventListener('click', event => {
      let target = event.target;

      if (target.closest('.hidden-large>img')) {
        popupMenu.style.display = 'flex';
      }
      if (target.closest('.close-menu-btn>img') || target.closest('.scroll')) {
        popupMenu.style.display = 'none';
      }
    });

    document.addEventListener('scroll', () => {

      if (pageYOffset >= 200) {
        topMenu.style.position = 'fixed';
      } else {
        topMenu.style.position = 'static';
      }
    });
  }
};

export default smallScreenNavigation;