const modal = () => {

    const modal = document.querySelector('.modal');
    const hideModalBtn = document.getElementById('hideModalBtn');

    const showModal = () => {
        modal.classList.add('show')
    };

    [...modalBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
            clearTimeout(timerId);
        })
    });

    hideModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
};

export default modal;