'use strict';

//выпадающее меню
const clubChoice = () => {
  const clubsList = document.querySelector('.clubs-list>ul');

  const toggle = (elem) => {
    if (elem.style.display === 'block') {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'block';
    }
  };

  document.addEventListener('click', event => {
    let target = event.target;
    
    if (target.closest('.club-select')) {
      toggle(clubsList);
    } else {
      clubsList.style.display = 'none';
    }
  });
};

export default clubChoice;