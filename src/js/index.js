import AOS from 'aos';
import slider from "./slider";
import smoothScroll from './smoothScroll';
import modal from './modal';
import burgerMenu from './burgerMenu';
import formHandler from './formHandler'

import 'aos/dist/aos.css';

AOS.init({ once: true });

smoothScroll();
slider();
modal();
burgerMenu();
formHandler();