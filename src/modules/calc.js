'use strict';

//калькулятор стоимости абонемента
const calc = () => {
  const selectsGymMembership = document.querySelectorAll('.time>input'),
        mozaika = document.getElementById('card_leto_mozaika'),
        schelkovo = document.getElementById('card_leto_schelkovo'),
        promoCode = document.querySelector('.promo-code');
  
  let total = document.getElementById('price-total');
  
  const count = () => {
    let cost;

    if (mozaika && mozaika.checked) {
      cost = [1990, 9900, 13900, 19900];
    } else if (schelkovo && schelkovo.checked) {
      cost = [2990, 14990, 21990, 24990];
    }

    selectsGymMembership.forEach((item, i) => {
       item.value = cost[i];
       if (item.checked) {
       total.innerHTML = item.value; 
      }
    });
  };

  document.addEventListener('input', () => {

    count();

    if (promoCode && promoCode.value === 'ТЕЛО2021') {
      total.innerHTML = Math.round(parseInt((total.innerHTML * 0.7), 10) /100) * 100;
    }
  });

  count();
};

export default calc;