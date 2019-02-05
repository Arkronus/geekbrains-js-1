'use strict';


// задание 1

let tc = parseFloat(prompt("Введите температуру в градусах по Цельсию"));
let tf = (9 / 5) * tc + 32;
alert(tf); 

// задание 2

let name = 'Василий';
let admin = name;
console.log(admin);

// задание 3

console.log(10 + 10 + "10"); //"2010"
console.log(10 + "10" + 10); //"101010"
console.log(10 + 10 + +"10"); //30
console.log(10 / -""); // -Infinity
console.log(10 / +"2,5"); // NaN

// задание 4

let mode = "normal";
let my_valu3 = 102;
// let 3my_value3 = "102";   название переменной не может начинаться с цифры
let __hello__ = "world";
let $$$ = "money";
// let !0_world = true;  название переменной не может начинаться с восклицательного знака