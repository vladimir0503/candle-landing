const burgerMenu = () => {
    const btn = document.querySelector('.header__content--burger-btn');
    const btnLine = document.querySelectorAll('.burger-btn-line');
    const sideBar = document.querySelector('.side-bar');

    let menuInit = false;

    const toggleMenu = () => {
        menuInit = !menuInit;
        if (menuInit) {
            btnLine[0].style.cssText = `transform: rotate(45deg) translate(7px, 7px)`;
            btnLine[1].style.opacity = '0';
            btnLine[2].style.cssText = `transform: rotate(-45deg) translate(7px, -7px);`;
            sideBar.classList.add('show');
        } else {
            btnLine[0].style.cssText = `transform: rotate(0); top: auto`;
            btnLine[1].style.opacity = '1';
            btnLine[2].style.cssText = `transform: rotate(0); bottom: auto`;
            sideBar.classList.remove('show');
        }
    };

    btn.addEventListener('click', toggleMenu);
    sideBar.addEventListener('click', toggleMenu);
};

export default burgerMenu;