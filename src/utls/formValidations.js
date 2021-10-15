export const fieldValidations = field => {
    field.valid = true;
    field.errorMessage = "";
    const value = field.value;
    if(field.validations.required) {
        if(!value.trim()) {
            field.valid = false;
            field.errorMessage = `${field.name} is required.`;
            return field;
        }
    }
    if(field.validations.email) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(value)) {
            field.valid = false;
            field.errorMessage = `Please enter a valid email.`;
            return field;
        }
    }
    if(field.validations.password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!passwordRegex.test(value)) {
            field.valid = false;
            field.errorMessage = `Password should have atleast 8 characters, 1 letter and 1 number.`;
            return field;
        }
    }
    if(field.validations.birthYear) {
        const birthYear = value.split("-")[0];
        if(Number(birthYear) > 2000) {
            field.valid = false;
            field.errorMessage = `Birth year should be 2000 or earlier.`;
            return field;
        }
    }
    if(field.validations.imageTypes) {
        const acceptedTypes = ["image/jpeg", "image/jpg", "image/png"];
        const fileType = field.file.type;
        if(!acceptedTypes.includes(fileType)) {
            field.valid = false;
            field.errorMessage = `Only JPEG and PNG images are allowed.`;
            return field;
        }
    }
    return field;
}

export const formValidation = form => {
    let valid = true;
    for(let key in form) {
        if(!form[key].valid) valid = false;
    }
    return valid;
}