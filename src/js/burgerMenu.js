const burgerMenu = () => {
    const btn = document.querySelector('.header__content--burger-btn');
    const btnLine = document.querySelectorAll('.burger-btn-line');

    let menuInit = false;

    const btnAnim = () => {
        if (menuInit) {
            btnLine[0].style.cssText = `transform: rotate(45deg) translate(6px, 7px)`;
            btnLine[1].style.opacity = '0';
            btnLine[2].style.cssText = `transform: rotate(-45deg) translate(7px, -7px);`;
        } else {
            btnLine[0].style.cssText = `transform: rotate(0); top: auto`;
            btnLine[1].style.opacity = '1';
            btnLine[2].style.cssText = `transform: rotate(0); bottom: auto`;
        }
    };

    btn.addEventListener('click', e => {
        menuInit = !menuInit;
        btnAnim();
    });
};

export default burgerMenu;