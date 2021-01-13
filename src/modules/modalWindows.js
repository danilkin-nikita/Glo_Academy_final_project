'use strict';

//модальные окна
const togglePopUp = () => {
  const freeVisitForm = document.getElementById('free_visit_form'),
        openVisitForm = document.querySelector('.open-popup');

  const callbackForm = document.getElementById('callback_form'),
        openCalbackForm = document.querySelector('.callback-btn');

  const openGift = document.querySelector('.fixed-gift>img'),
        gift = document.getElementById('gift');

  document.addEventListener('click', event => {
    let target = event.target;

    const toggle = (btn, form) => {
      if (target === btn) {
        form.style.display = 'block';
      }
      
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')) {
          form.style.display = 'none';
      }
    };

    toggle(openVisitForm, freeVisitForm);
    toggle(openCalbackForm, callbackForm);
    toggle(openGift, gift);

    if (target === openGift) {
      openGift.style.display = 'none';
    }
  });
};

export default togglePopUp;