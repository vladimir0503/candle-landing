const botToken = '5796180099:AAEK7ED6DP735MvASQFJUjXb_VAUi0zfUvM';
const chatId = -862534173;
const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=`;

const sendMessage = async data => {

    const {name, mail, field} = data;
    const message = `<b>Новая заявка!</b>%0A ${name}%0A ${mail}%0A ${field}`;

    const res = await fetch(`${telegramApi}${message}`);
    return res;
};

export default sendMessage;