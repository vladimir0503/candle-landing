const bubble = () => {
    const bubble = document.querySelector('.bubble');
    const form = document.querySelector('.form-block');

    bubble.addEventListener('click', e => {
        e.preventDefault();
        form.scrollIntoView({ block: "start", behavior: "smooth" });
    });

    const observer = new IntersectionObserver(() => {
        bubble.classList.toggle('show');
    });

    observer.observe(form);
};

export default bubble;