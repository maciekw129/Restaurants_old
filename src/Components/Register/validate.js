const validate = (values) => {
    let errorMessages = {};

    if(!values.restaurantName) {
        errorMessages.restaurantName = `To pole nie może być puste.`;
    }
    
    if (!values.password) {
        errorMessages.password = `To pole nie może być puste.`;
    } else if (values.password.length < 6) {
        errorMessages.password = `Hasło musi mieć co najmniej 6 znaków.`;
    } else if (values.password !== values.confirmPassword) {
        errorMessages.confirmPassword = 'Hasła się nie zgadzają.'
        errorMessages.password = 'Hasła się nie zgadzają';
    }

    if (!values.confirmPassword) {
        errorMessages.confirmPassword = `To pole nie może być puste.`;
    }

    if (!values.emailAddress) {
        errorMessages.emailAddress = `To pole nie może być puste.`;
    } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
        errorMessages.emailAddress = `Adres e-mail jest nieprawidłowy.`;
    }

    if (!values.phoneNumber) {
        errorMessages.phoneNumber = `To pole nie może być puste`;
    }

    return errorMessages;
}

export default validate;