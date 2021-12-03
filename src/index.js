import { initPageLoad } from "./page-load";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

const tabSwitch = (function() {
    const container = document.querySelector('#container');
    initPageLoad(container);
    const nav = document.querySelectorAll('li');
    nav.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (tab.id == 'homeTab') {
                removeChildNodes(container);
                initPageLoad(container);
            }
            else if (tab.id == 'menuTab') {
                removeChildNodes(container);
                loadMenuPage(container);
            }
            else if (tab.id == 'contactTab') {
                removeChildNodes(container);
                loadContactPage(container);
            }
        });
    });
    function removeChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
})();