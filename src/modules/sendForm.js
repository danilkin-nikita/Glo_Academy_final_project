'use strict';

//отправка и валидация форм
const sendForm = () => {

  const statusModal = document.getElementById('thanks');

  const inputError = elem => {
    elem.style.border = '3px solid red';
    setTimeout(() => {
        elem.style.border = '1px solid #b7b7b7';
    }, 1500);
  };

  document.addEventListener('submit', event => {
    event.preventDefault();
    let target = event.target;

    const inputName = target.querySelector('input[name="name"]'),
          inputPhone = target.querySelector('input[name="phone"]'),
          dataProcessing = target.querySelector('.personal-data>input[type="checkbox"]'),
          dataProcessingText = target.querySelector('.personal-data>label'),
          clubChoice = target.querySelectorAll('.club>input'),
          clubSelect = target.querySelector('.club>input:checked'),
          priceTotal = target.querySelector('#price-total');

    const validName = /^[а-яА-Я]{2,}$/,
          validPhone = /^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/;

    let valid = true;

    if (target.matches('form')) {

      if (inputName) {
        if (!inputName.value.match(validName)) {
          inputError(inputName);
          valid = false;
        }
      }
      if (!inputPhone.value.match(validPhone)) {
        inputError(inputPhone);
        valid = false;
      }
      if (clubChoice.length > 0 && !clubSelect) {
        let textError = document.createElement('p');
        textError.innerHTML = 'Выберите клуб!';
        textError.classList.add('error');
        target.appendChild(textError);
        setTimeout(() => {
          textError.style.display = 'none';
        }, 1500);
        valid = false;
      }
      if (dataProcessing && dataProcessing.checked === false) {
        dataProcessingText.classList.add('error');
        setTimeout(() => {
          dataProcessingText.classList.remove('error');
        }, 1500);
        valid = false;
      }
      if (valid === false) {
        return;
      }

      if (target.matches('#form1') || target.matches('#form2')) {
        target.closest('.popup').style.display = 'none';
      }

      statusModal.style.display = 'block';
      statusModal.innerHTML = `
                          <div class="overlay">
                          </div>
                          <div class="form-wrapper">
                              <div class="close-form">
                                  <img src="images/close-icon.png" alt="close" class="close_icon">
                              </div>
                              <div class="form-content">
                                  <h4>Заявка отправяется</h4>
                                  <p><img src="images/preloader.gif" height="35px"></p>
                                  <button class="btn close-btn" disabled ="true">OK</button>
                              </div>
                          </div>
      `;

      const formData = new FormData(target);

      target.querySelectorAll('input').forEach(elem => {
        elem.style.border = '1px solid #b7b7b7';
      });

      target.reset();
      if (priceTotal) {
        priceTotal.innerHTML = 1990;
      }

      postData(formData)
        .then(response => {
          if (response.status !== 200) {
              throw new Error('status network not 200');
          }
          statusModal.innerHTML = `
                           <div class="overlay">
                          </div>
                          <div class="form-wrapper">
                              <div class="close-form">
                                  <img src="images/close-icon.png" alt="close" class="close_icon">
                              </div>
                              <div class="form-content">
                                  <h4>Спасибо!</h4>
                                  <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                                  <button class="btn close-btn">OK</button>
                              </div>
                          </div>
      `;

      setTimeout(() => {
        statusModal.style.display = 'none';
      }, 5000); 

        })
        .catch(error => {
          statusModal.innerHTML = `
                           <div class="overlay">
                          </div>
                          <div class="form-wrapper">
                              <div class="close-form">
                                  <img src="images/close-icon.png" alt="close" class="close_icon">
                              </div>
                              <div class="form-content">
                                  <h4>Ошибка отправки :(</h4>
                                  <p>Что-то пошло не так...</p>
                                  <button class="btn close-btn">OK</button>
                              </div>
                          </div>
      `;

      setTimeout(() => {
        statusModal.style.display = 'none';
      }, 5000); 

      console.error(error);

      });
    }
  });

  const postData = formData => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'multipart/aplication/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });
  };
  
  document.addEventListener('change', event => {
    let target = event.target;

    if (target.matches('input[name="promo-code"]')) {
      if (target.value === 'ТЕЛО2021') {
         target.style.border = '3px solid green';
      } else {
        target.style.border = '1px solid #b7b7b7';
      }
    }

    if (target.matches('input[name="name"]')) {
      if (target.value.match(/^[а-яА-Я ]{2,}$/)) {
        target.style.border = '3px solid green';
      } else {
        target.style.border = '1px solid #b7b7b7';
      }
    }
    if (target.matches('input[name="phone"]')) {
      if (target.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)) {
        target.style.border = '3px solid green';
      } else {
        target.style.border = '1px solid #b7b7b7';
      }
    }
  });

  document.addEventListener('input', event => {
    let target = event.target;

    if (target.matches('input[name="name"]')) {
      target.value = target.value.replace(/[^а-яА-Я ]$/, '');
    }
    if (target.matches('input[name="phone"]')) {
      target.value = target.value.replace(/[^+\-\)\(0-9 ]$/, '');
    }
    if (target.matches('input[name="promo-code"]')) {
      target.value = target.value.toUpperCase();
    }
  });
};

export default sendForm;