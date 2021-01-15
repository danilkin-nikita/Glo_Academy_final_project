/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetelo"]("main",{

/***/ "./src/modules/smallScreenNavigation.js":
/*!**********************************************!*\
  !*** ./src/modules/smallScreenNavigation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n //бургер меню (при экране меньше чем 768 px)\n\nvar smallScreenNavigation = function smallScreenNavigation() {\n  var topMenu = document.querySelector('.top-menu'),\n      popupMenu = document.querySelector('.popup-menu');\n  var fixedGift = document.querySelector('.fixed-gift');\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.hidden-large>img')) {\n      popupMenu.style.display = 'flex';\n    }\n\n    if (target.closest('.close-menu-btn>img') || target.closest('.scroll')) {\n      popupMenu.style.display = 'none';\n    }\n  });\n  document.addEventListener('scroll', function () {\n    if (pageYOffset >= 200 && window.innerWidth < 768) {\n      topMenu.style.position = 'fixed';\n    } else if (pageYOffset < 200 || window.innerWidth >= 768) {\n      topMenu.style.position = 'static';\n    }\n\n    if (pageYOffset >= 3600) {\n      fixedGift.style.display = 'inline';\n    } else if (pageYOffset < 3600 || pageYOffset >= 4600) {\n      fixedGift.style.display = 'none';\n    }\n\n    console.log(pageYOffset);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smallScreenNavigation);\n\n//# sourceURL=webpack://telo/./src/modules/smallScreenNavigation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d75db51970a03fc78537"
/******/ 	})();
/******/ 	
/******/ }
);