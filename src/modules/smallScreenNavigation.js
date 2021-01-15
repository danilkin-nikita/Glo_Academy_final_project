'use strict';

//бургер меню (при экране меньше чем 768 px)
const smallScreenNavigation = () => {
  const topMenu = document.querySelector('.top-menu'),
        popupMenu = document.querySelector('.popup-menu');

  let fixedGift = document.querySelector('.fixed-gift');

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
    
    if (pageYOffset >= 200 && window.innerWidth < 768) {
      topMenu.style.position = 'fixed';
    } else if (pageYOffset < 200 || window.innerWidth >= 768) {
      topMenu.style.position = 'static';
    }

    if (pageYOffset >= 3600) {
      fixedGift.style.display = 'inline';
    } else if (pageYOffset < 3600) {
      fixedGift.style.display = 'none';
    }

    if (window.innerWidth < 768) {
      fixedGift.querySelector('img').style.maxWidth = '70%';
      fixedGift.style.right = '55px';
    } else {
      fixedGift.querySelector('img').style.maxWidth = '100%';
      fixedGift.style.right = '20px';
    }
  });
};

export default smallScreenNavigation;