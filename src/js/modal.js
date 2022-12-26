const modal = () => {

    const modal = document.querySelector('.modal');
    const modalBtn = document.getElementById('modalBtn');
    const hideModalBtn = document.getElementById('hideModalBtn');
    const messageModal = document.querySelector('.message-modal');
    
    const showModal = elem => {
        elem.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    const hideModal = elem => {
        elem.classList.remove('show');
        document.body.style.overflow = '';
    };

    const modalInit = (onBtn, offBtn, wrapper, wrapperTwo) => {
        onBtn.addEventListener('click', () => {
            showModal(wrapper);
        });

        offBtn.addEventListener('click', () => {
            hideModal(wrapper);
        });

        wrapper.addEventListener('click', e => {
            if (e.target === wrapper) {
                hideModal(wrapper);
            };
        });

        wrapperTwo.addEventListener('click', e => {
            if (e.target === wrapperTwo) {
                hideModal(wrapperTwo);
            };
        });
    };

    modalInit(modalBtn, hideModalBtn, modal, messageModal);
};

export default modal;