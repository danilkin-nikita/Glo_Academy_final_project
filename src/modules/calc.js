'use strict';

//калькулятор стоимости абонемента
const calc = () => {
  const selectsGymMembership = document.querySelectorAll('.time>input'),
        mozaika = document.getElementById('card_leto_mozaika'),
        schelkovo = document.getElementById('card_leto_schelkovo'),
        promoCode = document.querySelector('.promo-code'),
        inputCost = document.querySelector('input[name="cost"]'),
        cardCost = document.querySelectorAll('label>.cost'),
        cardType = document.querySelectorAll('input[name="card-type"]');
  
  let total = document.getElementById('price-total');
  
  const count = () => {
    let cost;

    if (mozaika && mozaika.checked) {
 
      cost = [{time:'1 месяц', money: 1990}, {time:'2 месяца', money: 9900}, {time:'9 месяцев', money: 13900}, {time:'12 месяцев', money: 19900}];
    } else if (schelkovo && schelkovo.checked) {
      cost = [{time:'1 месяц', money: 2990}, {time:'2 месяца', money: 14990}, {time:'9 месяцев', money: 21990}, {time:'12 месяцев', money: 24990}];
    } else {
      cardType.forEach((item, i) => {
        if (item.checked) {
          inputCost.value = cardCost[i].textContent.slice(0, -1);
        }
      });
    }

    selectsGymMembership.forEach((item, i) => {
       item.value = cost[i].time;
       if (item.checked) {
         if (promoCode && promoCode.value === 'ТЕЛО2021') {
          cost[i].money = Math.round(parseInt((cost[i].money * 0.7), 10) /100) * 100;
        }
       total.innerHTML = cost[i].money;
       inputCost.value = cost[i].money;
      }
    });
  };

  document.addEventListener('input', () => {
    count();
  });

  count();
};

export default calc;