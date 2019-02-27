'use strict';

let button = document.getElementById('register');
button.addEventListener('click', function(event){
    event.preventDefault();
    if (validateInput()){
        button.submit();
    }
})

function validateInput(){
    return validateLogin() && validatePasswords();
}

function validateLogin(){
    return validateLength('login', 1, 50);
}

function validatePasswords(){
    return validateLength('passwordinput', 5, 50) && validateEqualPassword('passwordinput', 'passwordconfirmation')
}

/*
*  Общая фукция для валидации размеров введённого тектса 
*/

function validateLength(id, minLength, maxLength) {
    let inputId = document.getElementById(id);
    let messageSpan = inputId.parentNode.children[1];

    if (inputId.value.length > minLength && inputId.value.length<= maxLength) {
        inputId.classList.remove('is-invalid');
        messageSpan.innerText = ""
        return true;
    } else {
        inputId.classList.add('is-invalid');
        messageSpan.innerText = `Поле должено содержать ${minLength}-${maxLength} символов`
        return false;
    }
}

function validateEqualPassword(idInput1, idInput2){
    let input1 = document.getElementById(idInput1);
    let input2 = document.getElementById(idInput2);
    let messageSpan = input2.parentNode.children[1];
    if (input1.value === input2.value) {
        input2.classList.remove('is-invalid');
        messageSpan.innerText = ""
        return true;
    } else {
        input2.classList.add('is-invalid');
        messageSpan.innerText = `Пароли не совпадают`
        return false;
    } 
}