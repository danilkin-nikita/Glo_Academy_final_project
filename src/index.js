'use strict';

import clubChoice from './modules/clubChoice';
import togglePopUp from './modules/modalWindows';
import smallScreenNavigation from './modules/smallScreenNavigation';
import arrowAppearance from './modules/navigation';


//выпадающее меню
clubChoice();

// модальные окна
togglePopUp();

//бургер меню (при экране меньше чем 768 px)
smallScreenNavigation();

//появление стрелки для прокрутки в начало сайта
arrowAppearance();