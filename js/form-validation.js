const rules = {
    '#fname': {
        message: 'Your first name is required (at least 3 characters).'
    },
    '#lname': {
        message: 'Your last name is required (at least 3 characters).'
    },
    '#email': {
        message: 'A valid email is required.'
    },
    '#phone': {
        message: 'A valid phone number is required.'
    },
    '#how': {
        message: 'Please tell me how you heard about Answer the Moment.'
    }, 
    '#about-business': {
        message: 'Please tell me about your business.'
    }
}
const clearMessage = ev => {
    console.log('clear message');
    ev.currentTarget.setCustomValidity('');
}

const showErrorMessage = ev => {
    const elem = ev.currentTarget;
    const message = rules['#' + elem.id].message;
    console.log(message);
    elem.setCustomValidity(message);
}
const initForm = () => {
    for (key in rules) {
        document.querySelector(key).addEventListener('input', clearMessage);
        document.querySelector(key).addEventListener('invalid', showErrorMessage);
    }
};

initForm();