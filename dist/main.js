/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactPage": () => (/* binding */ loadContactPage)
/* harmony export */ });
const loadContactPage = (element) => {

    const contactLayout = document.createElement('div');
    contactLayout.setAttribute('id', 'contactLayout');
    
    const contactInfoBox = document.createElement('div');
    contactInfoBox.setAttribute('id', 'contactInfoBox');
    const leftSide = document.createElement('div');
    leftSide.classList.add('info');
    const middle = document.createElement('div');
    middle.classList.add('info');
    const rightSide = document.createElement('div');
    rightSide.classList.add('info');

    const map = document.createElement('div');
    map.setAttribute('id', 'map');


    const location = document.createElement('h2');
    location.classList.add('lhp');
    location.innerHTML = 'Location';
    const locationInfo = document.createElement('p');
    locationInfo.classList.add('lhpInfo');
    locationInfo.innerHTML = `1234 E. Finonacci St, Hollywood, California, 12345`;

    const hours = document.createElement('h2');
    hours.classList.add('lhp');
    hours.innerHTML = 'Hours';
    const hoursInfo = document.createElement('p');
    hoursInfo.classList.add('lhpInfo');
    hoursInfo.innerHTML = `M-S: 8-12`;

    const phoneNumber = document.createElement('h2');
    phoneNumber.classList.add('lhp');
    phoneNumber.innerHTML = 'Phone Number';
    const phoneNumberInfo = document.createElement('p');
    phoneNumberInfo.classList.add('lhpInfo');
    phoneNumberInfo.innerHTML = '(123)-456-789';

    rightSide.append(phoneNumber, phoneNumberInfo);
    middle.append(hours, hoursInfo);
    leftSide.append(location, locationInfo);
    contactInfoBox.append(leftSide, middle, rightSide);
    contactLayout.append(contactInfoBox, map);
    element.appendChild(contactLayout);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuPage": () => (/* binding */ loadMenuPage)
/* harmony export */ });
const loadMenuPage = (element) => {
    const menuLayout = document.createElement('div');
    menuLayout.setAttribute('id', 'menuLayout');
    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'leftSide');
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'rightSide');

    const menu = document.createElement('h2');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = "Menu";

    const p1 = document.createElement('div');
    p1.classList.add('menuItems');
    const itemName = document.createElement('p');
    itemName.classList.add('itemName');
    itemName.innerHTML = "Digorno";
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('itemDescription');
    itemDescription.innerHTML = `Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil`;
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.innerHTML = "25";
    p1.append(itemName, itemDescription, itemPrice);

    const p2 = document.createElement('div');
    p2.classList.add('menuItems');
    const secondItemName = itemName.cloneNode(true);
    secondItemName.innerHTML = "Houdini";
    const secondItemDescription = itemDescription.cloneNode(true);
    secondItemDescription.innerHTML = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
    const secondItemPrice = itemPrice.cloneNode(true);
    secondItemPrice.innerHTML = "21";
    p2.append(secondItemName, secondItemDescription, secondItemPrice);

    const p3 = document.createElement('div');
    p3.classList.add('menuItems');
    const thirdItemName = itemName.cloneNode(true);
    thirdItemName.innerHTML = "Jefe";
    const thirdItemDescription = itemDescription.cloneNode(true);
    thirdItemDescription.innerHTML = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
    const thirdItemPrice = itemPrice.cloneNode(true);
    thirdItemPrice.innerHTML = "26";
    p3.append(thirdItemName, thirdItemDescription, thirdItemPrice);

    const p4 = document.createElement('div');
    p4.classList.add('menuItems');
    const fourthItemName = itemName.cloneNode(true);
    fourthItemName.innerHTML = "Ohana";
    const fourthItemDescription = itemDescription.cloneNode(true);
    fourthItemDescription.innerHTML = "Tomato sauce, Bacon, Pineapple, Olives, Basil";
    const fourthItemPrice = itemPrice.cloneNode(true);
    fourthItemPrice.innerHTML = "17";
    p4.append(fourthItemName, fourthItemDescription, fourthItemPrice);

    const p5 = document.createElement('div');
    p5.classList.add('menuItems');
    const fifthItemName = itemName.cloneNode(true);
    fifthItemName.innerHTML = "Penegrio";
    const fifthItemDescription = itemDescription.cloneNode(true);
    fifthItemDescription.innerHTML = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
    const fifthItemPrice = itemPrice.cloneNode(true);
    fifthItemPrice.innerHTML = "22";
    p5.append(fifthItemName, fifthItemDescription, fifthItemPrice);

    const p6 = document.createElement('div');
    p6.classList.add('menuItems');
    const sixthItemName = itemName.cloneNode(true);
    sixthItemName.innerHTML = "Serenity";
    const sixthItemDescription = itemDescription.cloneNode(true);
    sixthItemDescription.innerHTML = "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";
    const sixthItemPrice = itemPrice.cloneNode(true);
    sixthItemPrice.innerHTML = "28";
    p6.append(sixthItemName, sixthItemDescription, sixthItemPrice);

    leftSide.append(p1, p2, p3);
    rightSide.append(p4, p5, p6);

    menuLayout.append(leftSide, rightSide);

    element.setAttribute('style', 'display: flex; flex-direction: column;');
    element.append(menu, menuLayout);
}



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPageLoad": () => (/* binding */ initPageLoad)
/* harmony export */ });
const initPageLoad = (element) => {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const restaurantName = document.createElement('h1');
    restaurantName.setAttribute('id', 'restaurantName');
    restaurantName.innerHTML = `Fibonacci`;

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.innerHTML = 'Since 1988';

    home.append(restaurantName, description);
    element.setAttribute('style', 'display: grid;');
    element.append(home);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const tabSwitch = (function() {
    const container = document.querySelector('#container');
    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.initPageLoad)(container);
    const nav = document.querySelectorAll('li');
    nav.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (tab.id == 'homeTab') {
                removeChildNodes(container);
                (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.initPageLoad)(container);
            }
            else if (tab.id == 'menuTab') {
                removeChildNodes(container);
                (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)(container);
            }
            else if (tab.id == 'contactTab') {
                removeChildNodes(container);
                (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)(container);
            }
        });
    });
    function removeChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0QsdUJBQXVCO0FBQ3pFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNMO0FBQ007O0FBRTVDO0FBQ0E7QUFDQSxJQUFJLHdEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5REFBZTtBQUMvQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZENvbnRhY3RQYWdlID0gKGVsZW1lbnQpID0+IHtcblxuICAgIGNvbnN0IGNvbnRhY3RMYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0TGF5b3V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdExheW91dCcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RJbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm9Cb3guc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0SW5mb0JveCcpO1xuICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZGRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hcCcpO1xuXG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbGhwJyk7XG4gICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJ0xvY2F0aW9uJztcbiAgICBjb25zdCBsb2NhdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25JbmZvLmNsYXNzTGlzdC5hZGQoJ2xocEluZm8nKTtcbiAgICBsb2NhdGlvbkluZm8uaW5uZXJIVE1MID0gYDEyMzQgRS4gRmlub25hY2NpIFN0LCBIb2xseXdvb2QsIENhbGlmb3JuaWEsIDEyMzQ1YDtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdsaHAnKTtcbiAgICBob3Vycy5pbm5lckhUTUwgPSAnSG91cnMnO1xuICAgIGNvbnN0IGhvdXJzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc0luZm8uY2xhc3NMaXN0LmFkZCgnbGhwSW5mbycpO1xuICAgIGhvdXJzSW5mby5pbm5lckhUTUwgPSBgTS1TOiA4LTEyYDtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdsaHAnKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnUGhvbmUgTnVtYmVyJztcbiAgICBjb25zdCBwaG9uZU51bWJlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ2xocEluZm8nKTtcbiAgICBwaG9uZU51bWJlckluZm8uaW5uZXJIVE1MID0gJygxMjMpLTQ1Ni03ODknO1xuXG4gICAgcmlnaHRTaWRlLmFwcGVuZChwaG9uZU51bWJlciwgcGhvbmVOdW1iZXJJbmZvKTtcbiAgICBtaWRkbGUuYXBwZW5kKGhvdXJzLCBob3Vyc0luZm8pO1xuICAgIGxlZnRTaWRlLmFwcGVuZChsb2NhdGlvbiwgbG9jYXRpb25JbmZvKTtcbiAgICBjb250YWN0SW5mb0JveC5hcHBlbmQobGVmdFNpZGUsIG1pZGRsZSwgcmlnaHRTaWRlKTtcbiAgICBjb250YWN0TGF5b3V0LmFwcGVuZChjb250YWN0SW5mb0JveCwgbWFwKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RMYXlvdXQpO1xufVxuZXhwb3J0IHtsb2FkQ29udGFjdFBhZ2V9OyIsImNvbnN0IGxvYWRNZW51UGFnZSA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWVudUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMYXlvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51TGF5b3V0Jyk7XG4gICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0U2lkZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnRTaWRlJyk7XG4gICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRTaWRlLnNldEF0dHJpYnV0ZSgnaWQnLCAncmlnaHRTaWRlJyk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW1OYW1lJyk7XG4gICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gXCJEaWdvcm5vXCI7XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtRGVzY3JpcHRpb24nKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYFRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIEhvbWVtYWRlIHNhdXNhZ2UsIEdhcmxpYywgQmFzaWxgO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbVByaWNlJyk7XG4gICAgaXRlbVByaWNlLmlubmVySFRNTCA9IFwiMjVcIjtcbiAgICBwMS5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1zJyk7XG4gICAgY29uc3Qgc2Vjb25kSXRlbU5hbWUgPSBpdGVtTmFtZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgc2Vjb25kSXRlbU5hbWUuaW5uZXJIVE1MID0gXCJIb3VkaW5pXCI7XG4gICAgY29uc3Qgc2Vjb25kSXRlbURlc2NyaXB0aW9uID0gaXRlbURlc2NyaXB0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBzZWNvbmRJdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWxcIjtcbiAgICBjb25zdCBzZWNvbmRJdGVtUHJpY2UgPSBpdGVtUHJpY2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHNlY29uZEl0ZW1QcmljZS5pbm5lckhUTUwgPSBcIjIxXCI7XG4gICAgcDIuYXBwZW5kKHNlY29uZEl0ZW1OYW1lLCBzZWNvbmRJdGVtRGVzY3JpcHRpb24sIHNlY29uZEl0ZW1QcmljZSk7XG5cbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHAzLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuICAgIGNvbnN0IHRoaXJkSXRlbU5hbWUgPSBpdGVtTmFtZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcmRJdGVtTmFtZS5pbm5lckhUTUwgPSBcIkplZmVcIjtcbiAgICBjb25zdCB0aGlyZEl0ZW1EZXNjcmlwdGlvbiA9IGl0ZW1EZXNjcmlwdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcmRJdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgQ2hpbGxpIGZsYWtlcywgT2xpdmVzLCBCYXNpbFwiO1xuICAgIGNvbnN0IHRoaXJkSXRlbVByaWNlID0gaXRlbVByaWNlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlyZEl0ZW1QcmljZS5pbm5lckhUTUwgPSBcIjI2XCI7XG4gICAgcDMuYXBwZW5kKHRoaXJkSXRlbU5hbWUsIHRoaXJkSXRlbURlc2NyaXB0aW9uLCB0aGlyZEl0ZW1QcmljZSk7XG5cbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHA0LmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuICAgIGNvbnN0IGZvdXJ0aEl0ZW1OYW1lID0gaXRlbU5hbWUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGZvdXJ0aEl0ZW1OYW1lLmlubmVySFRNTCA9IFwiT2hhbmFcIjtcbiAgICBjb25zdCBmb3VydGhJdGVtRGVzY3JpcHRpb24gPSBpdGVtRGVzY3JpcHRpb24uY2xvbmVOb2RlKHRydWUpO1xuICAgIGZvdXJ0aEl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlRvbWF0byBzYXVjZSwgQmFjb24sIFBpbmVhcHBsZSwgT2xpdmVzLCBCYXNpbFwiO1xuICAgIGNvbnN0IGZvdXJ0aEl0ZW1QcmljZSA9IGl0ZW1QcmljZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZm91cnRoSXRlbVByaWNlLmlubmVySFRNTCA9IFwiMTdcIjtcbiAgICBwNC5hcHBlbmQoZm91cnRoSXRlbU5hbWUsIGZvdXJ0aEl0ZW1EZXNjcmlwdGlvbiwgZm91cnRoSXRlbVByaWNlKTtcblxuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcDUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1zJyk7XG4gICAgY29uc3QgZmlmdGhJdGVtTmFtZSA9IGl0ZW1OYW1lLmNsb25lTm9kZSh0cnVlKTtcbiAgICBmaWZ0aEl0ZW1OYW1lLmlubmVySFRNTCA9IFwiUGVuZWdyaW9cIjtcbiAgICBjb25zdCBmaWZ0aEl0ZW1EZXNjcmlwdGlvbiA9IGl0ZW1EZXNjcmlwdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZmlmdGhJdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgSG9tZW1hZGUgc2F1c2FnZSwgQmFjb24sIEdhcmxpYywgUGVwcGVyLCBDaGlsbGlcIjtcbiAgICBjb25zdCBmaWZ0aEl0ZW1QcmljZSA9IGl0ZW1QcmljZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZmlmdGhJdGVtUHJpY2UuaW5uZXJIVE1MID0gXCIyMlwiO1xuICAgIHA1LmFwcGVuZChmaWZ0aEl0ZW1OYW1lLCBmaWZ0aEl0ZW1EZXNjcmlwdGlvbiwgZmlmdGhJdGVtUHJpY2UpO1xuXG4gICAgY29uc3QgcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwNi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbXMnKTtcbiAgICBjb25zdCBzaXh0aEl0ZW1OYW1lID0gaXRlbU5hbWUuY2xvbmVOb2RlKHRydWUpO1xuICAgIHNpeHRoSXRlbU5hbWUuaW5uZXJIVE1MID0gXCJTZXJlbml0eVwiO1xuICAgIGNvbnN0IHNpeHRoSXRlbURlc2NyaXB0aW9uID0gaXRlbURlc2NyaXB0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBzaXh0aEl0ZW1EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIldoaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCI7XG4gICAgY29uc3Qgc2l4dGhJdGVtUHJpY2UgPSBpdGVtUHJpY2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHNpeHRoSXRlbVByaWNlLmlubmVySFRNTCA9IFwiMjhcIjtcbiAgICBwNi5hcHBlbmQoc2l4dGhJdGVtTmFtZSwgc2l4dGhJdGVtRGVzY3JpcHRpb24sIHNpeHRoSXRlbVByaWNlKTtcblxuICAgIGxlZnRTaWRlLmFwcGVuZChwMSwgcDIsIHAzKTtcbiAgICByaWdodFNpZGUuYXBwZW5kKHA0LCBwNSwgcDYpO1xuXG4gICAgbWVudUxheW91dC5hcHBlbmQobGVmdFNpZGUsIHJpZ2h0U2lkZSk7XG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsnKTtcbiAgICBlbGVtZW50LmFwcGVuZChtZW51LCBtZW51TGF5b3V0KTtcbn1cblxuZXhwb3J0IHtsb2FkTWVudVBhZ2V9OyIsImNvbnN0IGluaXRQYWdlTG9hZCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50TmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IGBGaWJvbmFjY2lgO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdTaW5jZSAxOTg4JztcblxuICAgIGhvbWUuYXBwZW5kKHJlc3RhdXJhbnROYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGdyaWQ7Jyk7XG4gICAgZWxlbWVudC5hcHBlbmQoaG9tZSk7XG59XG5leHBvcnQge2luaXRQYWdlTG9hZH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0UGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IGxvYWRNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgdGFiU3dpdGNoID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICBpbml0UGFnZUxvYWQoY29udGFpbmVyKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIG5hdi5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhYi5pZCA9PSAnaG9tZVRhYicpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZE5vZGVzKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaW5pdFBhZ2VMb2FkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0YWIuaWQgPT0gJ21lbnVUYWInKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGROb2Rlcyhjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGxvYWRNZW51UGFnZShjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFiLmlkID09ICdjb250YWN0VGFiJykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFjdFBhZ2UoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=