import modals from './modules/modals';
import sliders from "./modules/sliders";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders({
        slides :'.main-slider-item',
        dir: 'vertical',
        animationSpeed : 10000
    });
    sliders({
        slides :'.feedback-slider-item',
        dir: '',
        animation : 'fadeIn',
        prev: '.main-prev-btn',
        next: '.main-next-btn'
    });
    forms();
})