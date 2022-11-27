import submitForm from "./common/submitForm";

const formHandler = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => submitForm(form));
};

export default formHandler;