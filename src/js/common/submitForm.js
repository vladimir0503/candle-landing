import sendMessage from "./sendMessage";

const submitForm = form => {

    const infoModal = document.querySelector('.message-modal');

    const formBtn = [...form.children].filter(elem => {
        if (elem.nodeName === 'BUTTON') return elem;
    })[0];

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(form);

        const name = formData.get('name');
        const mail = formData.get('mail');
        const field = formData.get('field');

        formBtn.innerHTML = 'Отправка...';
        formBtn.disabled = true;

        const res = await sendMessage({ name, mail, field });

        infoModal.classList.add('show');

        if (!res.ok) {
            infoModal.children[1].innerHTML = `
                <h2>Ошибка отправки!</h2>
                <p>Попробуйте позже</p>
            `;
        } else {
            infoModal.children[1].innerHTML = `
                <h2>Сообщение отправлено!</h2>
                <p>С Вами скоро свяжутся</p>
            `;
        };

        formBtn.innerHTML = 'Отправить';
        formBtn.disabled = false;
        form.reset();

        infoModal.children[0]
            .addEventListener('click', () => infoModal.classList.remove('show'));
    });
};

export default submitForm;