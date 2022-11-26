import sendMessage from "./sendMessage";

const submitForm = form => {

    const formElem = [...form.children].filter(elem => {
        if (elem.nodeName === 'BUTTON' || elem.nodeName === 'P') return elem;
    });

    console.log(formElem);

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(form);

        const name = formData.get('name');
        const mail = formData.get('mail');
        const question = formData.get('question');

        formBtn.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';

        const res = await sendMessage({ name, mail, question });

        if (!res.ok) {
            formTitle.innerHTML = 'Ошибка отправки!';
            formTitle.style.color = 'red';
        } else {
            formTitle.innerHTML = 'Сообщение отправленно!';
            formTitle.style.color = 'green';
        };

        formBtn.innerHTML = 'Записаться сейчас!';
        form.reset();
    });
};

export default submitForm;