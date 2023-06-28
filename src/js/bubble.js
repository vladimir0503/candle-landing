const bubble = () => {
    const bubble = document.querySelector('.bubble');
    const form = document.querySelector('.form-block');

    const observer = new IntersectionObserver(() => {
        bubble.classList.toggle('show');
    });

    observer.observe(form);
};

export default bubble;