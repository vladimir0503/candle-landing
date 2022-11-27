const modal = () => {

    const modal = document.querySelector('.modal');
    const hideModalBtn = document.getElementById('hideModalBtn');

    const showModal = () => {
        modal.classList.add('show')
    };

    // const timerId = setTimeout(showModal, 10000);

    [...modalBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
            clearTimeout(timerId);
        })
    });

    hideModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        // clearTimeout(timerId);
    });
};

export default modal;