import sendMessage from "./common/sendMessage";

const modal = () => {

    const modal = document.querySelector('.modal');
    const messageModal = document.querySelector('.message-modal');
    const hideModalBtn = document.getElementById('hideModalBtn');
    const form = modal.children[1];
    const formBtn = form.children[4];
    const formTitle = form.children[0];

    const showModal = () => {
        modal.classList.add('show')
    };

    const timerId = setTimeout(showModal, 10000);

    [...modalBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
            clearTimeout(timerId);
        })
    });

    const resetInfo = () => {
        formTitle.innerHTML = 'Оставить заявку';
        formTitle.style.color = '#666';
    };

    hideModalBtn.addEventListener('click', () => {
        resetInfo();
        modal.classList.remove('show');
        clearTimeout(timerId);
    });

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(form);

        const name = formData.get('name');
        const mail = formData.get('mail');
        const question = formData.get('question');

        formBtn.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
        formBtn.disabled = true;

        const res = await sendMessage({ name, mail, question });

        messageModal.classList.add('show');

        if (!res.ok) {
            messageModal.children[1].innerHTML = `
                <h2>Ошибка отправки!<h2/>
                <p>Попробуйте позже</p>
            `;
        } else {
            messageModal.children[1].innerHTML = `
                <h2>Сообщение отправленно!<h2/>
                <p>С вами скоро свяжутся</p>
            `;
        };

        formBtn.innerHTML = 'Записаться сейчас!';
        formBtn.disabled = false;

        form.reset();

        messageModal.children[0]
            .addEventListener('click', () => messageModal.classList.remove('show'));
    });
};

export default modal;