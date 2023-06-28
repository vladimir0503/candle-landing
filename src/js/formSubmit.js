const formSubmit = () => {

    const botToken = '6083389041:AAFSWx9L5e9g7gOXuY5Bnpwz0ttgqc4A-Jk';
    const chatId = -978006136;
    const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

    const form = document.querySelector('form');

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            tel: formData.get('tel'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        const message = `<b>Новая заявка!</b>%0A ${data.name}%0A ${data.tel}%0A ${data.email}%0A ${data.message}`;

        try {
            e.target.children[5].value = 'Отправка...';
            await fetch(`${telegramApi}${message}`);
        } catch (error) {
            console.log(error);
        } finally {
            e.target.children[5].value = 'Отправить';
            e.target.reset();
        };

    });

};

export default formSubmit;