'use strict';

import clubChoice from './modules/clubChoice';
import togglePopUp from './modules/modalWindows';
import smallScreenNavigation from './modules/smallScreenNavigation';
import arrowAppearance from './modules/navigation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import gallerySlider from './modules/gallerySlider';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servicesSlider';

//выпадающее меню
clubChoice();

// модальные окна
togglePopUp();

//бургер меню (при экране меньше чем 768 px)
smallScreenNavigation();

//появление стрелки для прокрутки в начало сайта
arrowAppearance();

//калькулятор стоимости абонемента
calc();

//отправка и валидация форм
sendForm();

//слайдер галереи
gallerySlider();

//главный слайдер
mainSlider();

// слайдер карусель услуг
servicesSlider();