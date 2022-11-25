import AOS from 'aos';
import slider from "./slider";
import smoothScroll from './smoothScroll';
import modal from './modal';
import burgerMenu from './burgerMenu';

import 'aos/dist/aos.css';

AOS.init({ once: false });

smoothScroll();
slider();
modal();
burgerMenu();