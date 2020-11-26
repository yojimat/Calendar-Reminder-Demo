const maxLengthValidation = (value, oldvalue) => {
    if(value.length > 30)
        return oldvalue;
    return value;
};

const dayValidation = (value, oldvalue) => {
    const number = parseInt(value)
    if(number < 1 || number > 31)
        return oldvalue;
    return number;
};

const alphaOnly = (value, oldValue) => {
    const regex = /\d/g,
        isThereANumber = regex.test(value);
    if (isThereANumber)
        return oldValue;
    return value;
}

export { maxLengthValidation, dayValidation, alphaOnly };