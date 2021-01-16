'use strict';

//модальные окна
const togglePopUp = () => {
  const freeVisitForm = document.getElementById('free_visit_form'),
        openVisitForm = document.querySelector('.open-popup');

  const callbackForm = document.getElementById('callback_form'),
        openCalbackForm = document.querySelector('.callback-btn');

  const openGift = document.querySelector('.fixed-gift>img'),
        gift = document.getElementById('gift');

  const statusModal = document.getElementById('thanks'); 

  document.addEventListener('click', event => {
    let target = event.target;

    const toggle = (btn, modal) => {
      if (target === btn) {
        modal.style.display = 'block';
      }
      
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')) {
          modal.style.display = 'none';
      }
    };

    toggle(openVisitForm, freeVisitForm);
    toggle(openCalbackForm, callbackForm);
    if (openGift) {
      toggle(openGift, gift);
    }

    if (target === openGift) {
      openGift.style.display = 'none';
    }

      if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')) {
          statusModal.style.display = 'none';
      }
  });
};

export default togglePopUp;