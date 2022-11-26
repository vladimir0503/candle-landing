const botToken = '5796180099:AAEK7ED6DP735MvASQFJUjXb_VAUi0zfUvM';
const chatId = -865964591;
const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

const sendMessage = async data => {

    const {name, mail, question} = data;

    const message = `<b>Новая заявка!</b>%0A <b>Имя</b>: ${name}%0A <b>Email</b>: ${mail}%0A <b>Вопрос</b>: ${question}`;

    const res = await fetch(`${telegramApi}${message}`);
    return res;
};

export default sendMessage;