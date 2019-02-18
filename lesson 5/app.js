"use strict";

// Задание 1

let converter = {

    digits: {
        'единицы':0,
        'десятки':0,
        'сотни':0
    },

    convert(number){
        let num = parseInt(number);
        if (number>999) {
            console.log("Число больше 999");
        } else {
            this.digits['сотни'] = Math.floor(num / 100);
            this.digits['десятки'] = Math.floor((num - this.digits['сотни']*100) / 10);
            this.digits['единицы'] = num % 10
        }
    }

}


let input = prompt("Введите число от 0 до 999");
converter.convert(input);
console.log(converter.digits);

// Задание 2

let basket = {
    goodList: [],

    // метод реализован в корзине
    putToBasket(good){
        this.goodList.push(good);
    },
    
    countTotalPrice(){
        let totalPrice = 0;
        this.goodList.forEach( function(element, index) {
            totalPrice += element.price;
        });
        return totalPrice;

    },

    countTotalNumber(){
        let totalNumber = 0;
        this.goodList.forEach(function(element, index) {
            totalNumber += 1;
        });
        return totalNumber;
    }
}

// отдельный товар
let good = {
    name: "Мясо",
    price: 150
}

// список товаров
let goodsList = [
    {
        name:"Fish",
        price: 20
    },
    {
        name:"Meat",
        price: 150
    },
    {
        name: "Chips",
        price: 30
    }

]

// заполняем корзину
goodsList.forEach(function(item, index){
    basket.putToBasket(item);
    // если позиция нечётная кладем второй предмет
    if (index % 2 == 1) {basket.putToBasket(item)} 
})

// печатаем сумму и количество
console.log("Стоимость товаров: " +basket.countTotalPrice())
console.log("Всего товаров: " + basket.countTotalNumber())