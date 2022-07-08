const atLeast3 = elem => {
    return (elem.value.length >= 3) ? true : false;
}
const notEmpty = elem => {
    return (elem.value.length > 0) ? true : false;
}

const email = elem => {
    return String(elem.value)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const phoneOptional = elem => {
    if (elem.value.length === 0) {
        return true;
    }
    return String(elem.value)
        .toLowerCase()
        .match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        );    
}

const rules = {
    '#fname': {
        message: 'Your first name is required (at least 3 characters).',
        validator: atLeast3
    },
    '#lname': {
        message: 'Your last name is required (at least 3 characters).',
        validator: atLeast3
    },
    '#email': {
        message: 'A valid email is required.',
        validator: email
    },
    '#phone': {
        message: 'A valid phone number is required.',
        validator: phoneOptional
    },
    '#how': {
        message: 'Please tell me how you heard about Answer the Moment.',
        validator: notEmpty
    }, 
    '#about-business': {
        message: 'Please tell me about your business.',
        validator: notEmpty
    }
}

const validateAndSubmit = ev => {
    let isFormValid = true;
    for (key in rules) {
        const validator = rules[key].validator;
        const elem = document.querySelector(key)
        const errorElement = elem.nextElementSibling;
        
        isFieldValid = validator(elem);
        if (!isFieldValid) {
            errorElement.innerHTML = rules[key].message;
            errorElement.classList.add('active');
            errorElement.parentElement.classList.add('invalid');
            isFormValid = false;
        } else {
            errorElement.classList.remove('active');
            errorElement.parentElement.classList.remove('invalid');
        }
    }
    if (!isFormValid) {
        ev.preventDefault();
        return false;
    } else {
        return true;
    }
};

// add form validation event handler:
document.querySelector('form').addEventListener('submit', validateAndSubmit);