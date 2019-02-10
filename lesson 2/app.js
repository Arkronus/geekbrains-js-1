"use strict";

// Задание 1
console.log("Задание 1");

let a = 1, b = 1, c, d;
c = ++a; //сначала a увеличивается на единицу, потом её значение присваивается с.
console.log(c);

d = b++; // значение b присваивается d, потом b увеличивается на единицу. Значение переменной d = 1, b = 2
console.log(d); 

c = (2+ ++a); // a увеличивается ещё на единицу (теперь a = 3), новое значение используется в выражении. 
console.log(c);

d = (2+ b++); // занчение b (которое теперь равно 2) используется в выроажении, затем b увеличивается на единицу (после этого b = 3).  
console.log(d);

console.log(a);
console.log(b);

// Задание 2
console.log("Задание 2");

a = 2; // переменная a объявлена раньше, поэтоve при использовании var выдаётся ошибка. Без var значение переменной x = 5
var x = 1 + (a *= 2);
console.log(x); 

// Задание 3
console.log("Задание 3");

a = parseInt(prompt("Число а"));
b = parseInt(prompt("Число b"));

if (a >=0 && b >= 0){
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b)
}

// Задание 3

function add (a, b) {
    return a + b;
}

function substr(a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b
}


// Задание 4

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2)
            break;
        case "-":
            return substr(arg1, arg2)
            break;
        case "*":
            return mult(arg1, arg2)
            break;
        case "/":
            return div(arg1, arg2)
            break;        
        default:
            console.log("Я так не умею")
            break;
    }
}

// Задание 6

function myPow(val, pow) {
    if (pow == 0) {
        return 1;
    } else {
        return val * myPow(val,  pow - 1)
    } 
}

console.log("Задание 6");

let pow_result = myPow(5, 3)
console.log(pow_result)

// Задание 7

function checkPassword (password) {
    
    function validLength (password) {
        return password.length >= 3 && password.length <= 12
    }

    function hasSymbols (password) {
        const SYMBOLS = ['&','$','%','*']
        for (var i = SYMBOLS.length - 1; i >= 0; i--) {
           if (password.indexOf(SYMBOLS[i]) > 0) {
               return true
           }
        }
        return false
    }

    function firstLastLetter (password) {
        return password[0] === 'q' || password[password.length - 1] === 'z'
    }


    return validLength(password) && hasSymbols(password) && firstLastLetter(password)
}

console.log("Задание 7");
let password = "asdjkl$z"
console.log(checkPassword(password))