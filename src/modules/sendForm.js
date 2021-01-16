'use strict';

//отправка и валидация форм
const sendForm = () => {

  const statusModal = document.getElementById('thanks'),
        dataProcessing = document.querySelector('.personal-data>input[type="checkbox"]'),
        submitBtn = document.querySelector('button[type="submit"]');

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
          dataProcessingText = target.querySelector('.personal-data>label')

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
      if (dataProcessing && dataProcessing.checked === false) {
        dataProcessingText.style.color = 'red';
        setTimeout(() => {
          dataProcessingText.style.color = 'white';
        }, 1500);
        valid = false;
      }
      if (valid === false) {
        return;
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
        elem.style.border = 'none';
      });

      target.reset();

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