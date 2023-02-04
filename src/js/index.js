import AOS from 'aos';
import slider from "./slider";
import smoothScroll from './smoothScroll';
import modal from './modal';
import burgerMenu from './burgerMenu';
import formHandler from './formHandler';
import loadData from './common/loadData';

import 'aos/dist/aos.css';

window.addEventListener('DOMContentLoaded', () => {

    AOS.init({ once: true });

    loadData();
    smoothScroll();
    // slider();
    modal();
    burgerMenu();
    formHandler();
});