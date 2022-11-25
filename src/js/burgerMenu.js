const burgerMenu = () => {

    const burgerBtn = document.querySelector('.header__content--burger');
    const sideBar = document.querySelector('.side-bar');

    const children = [...sideBar.children].map(elem => [...elem.children]).flat();

    burgerBtn.addEventListener('click', () => {
        sideBar.classList.toggle('show');
    });

    children.forEach(elem => {
        if (elem.nodeName === 'IMG' || elem.nodeName === 'UL') {
            elem.addEventListener('click', () => {
                sideBar.classList.toggle('show');
            });
        }
    });
};

export default burgerMenu;