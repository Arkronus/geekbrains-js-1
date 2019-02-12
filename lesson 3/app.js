// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

console.log("Задание 1")
function isPrimeNumber(num){
    for (let i = 2; i < num; i++){
        if (num % i == 0 && i != num) return false;
    }
    return true;
}

let counter = 0;

while (counter <= 100) {
    if(isPrimeNumber(counter)) console.log(counter); 
    counter++;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [
                {"item": "молоко", "quantity": 2, "price": 90},
                {"item": "мясо", "quantity": 1, "price": 200},
                {"item": "сыр", "quantity": 3, "price": 100},
             ]

function countBasketPrice(basket){
    let totalPrice = 0;
    for (var i =  0; i < basket.length; i++) {
        totalPrice += basket[i]['quantity'] * basket[i]['price'];
    }
    return totalPrice;
}
console.log("Задание 2-3");
console.log(countBasketPrice(basket));


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

console.log("Задание 4")
for(let i = 0; i < 10; console.log(i++)){ }


// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

console.log("Задание 4б")
for(let i = 1; i <= 20; i++){
    let line = '*'.repeat(i);
    console.log(line);
}