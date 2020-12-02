import modals from './modules/modals';
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import checkLengthRequiredInputs from "./modules/checkLengthRequiredInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import forms from "./modules/forms";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let calcState = {};

    modals();
    sliders({
        slides: '.main-slider-item',
        dir: 'vertical',
        animationSpeed: 10000
    });
    sliders({
        slides: '.feedback-slider-item',
        dir: '',
        animation: 'fadeIn',
        prev: '.main-prev-btn',
        next: '.main-next-btn'
    });
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    checkLengthRequiredInputs();
    showMoreStyles('.button-styles', '#styles .row');
    calc(
        '#size',
        '#material',
        '#options',
        '.promocode',
        '.calc-price',
        calcState
    );
    forms(calcState);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
})