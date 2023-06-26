const smoothScroll = () => {

    const links = document.querySelectorAll('a[data-nav]');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const ID = link.getAttribute('href').substr(1);
            document.getElementById(ID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

export default smoothScroll;