import submitForm from "./common/submitForm";


const modal = () => {

    const modal = document.querySelector('.modal');
    const hideModalBtn = document.getElementById('hideModalBtn');
    const form = modal.children[1];

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
        clearTimeout(timerId);
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        const name = formData.get('name');
        const mail = formData.get('mail');
        const question = formData.get('question');

        submitForm({name, mail, question})
    });

};

export default modal;