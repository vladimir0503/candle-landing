const modal = () => {

    const modal = document.querySelector('.modal');
    const hideModalBtn = document.getElementById('hideModalBtn');

    const showModal = () => {
        modal.classList.add('show')
    };

    [...modalBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        })
    });

    hideModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // const timerId = setTimeout(showModal, 10000);
};

export default modal;