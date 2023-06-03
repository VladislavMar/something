//--------------- Вывод в консоль
// console.log('Helo, from JS!')

//-------------- Переменные
/*let userName = 'Vlad'
console.log(userName)
*/

//------------- Типы переменных
// Let - Может менять значение во время работы программы
/*let userName = 'Vlad';
console.log(userName); 
*/

/*userName = Ivan;
console.log(userName);
*/
// const - не моедт менять значение
/*const yearOfBirth = 1990;
 */
// var - старый формат объявления перменной
// не рекомендуется
// может менять значение на протяжении работы программы

/*var city = 'Moscow'
var city = 'Minsk'
var city = 'Kiev'  
console.log(city)
*/

//----------------- Область видимости
// ! По умолчанию используем const
// когда явно понятно что переменная будет менять свое значение, тогда let

//--------- Типы данных

/*let userName = 'Vlad' // Строка (Текст), (Одно словоЮ фраза, предложение, абзац, хоть целая книга)
 
let number = 30 // Число

let = isMarried = false // Логическре занчение true/false
*/
// Динамическая типизация
/*let someVariable = 'Some value' // someVariable типа String
someVariable = 50 // someVariable типа number 
someVariable = true // someVariable становится типа BooLean
*/
// Значение null
// "ничего" "пусто" или "значение неизвестно"

/*let age = 32
age = null 
*/

// Значение undefined
// Значение не присвоено
/*let family
console.log(family)
 
let someName = 'Jeff'
someName = null
*/

// оператор typeof
/*const someName = true
typeof someName 
console.log(typeof someName)
*/

// ============Операторы сравнения и условия ===========
/*let number = 5;
if(number == 10){
    console.log('fuck niggers')
} else {
    console.log('niggers are good') 
}
*/
/*
const time = 20;
if (time < 12) {
  console.log("Good morning!");
} else if (time >= 12 && time < 18) {
    console.log('Good afternoon!')
} else {
    console.log('Good evening!')
}
*/
/*
ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
&& - логическое И
|| - лоигческое ИЛИ
!true - логическое НЕ
*/

// --------------- Тернарный оператор ---------------
/*
if (10 < 12 ) {
    console.log('Условие верно!')
} else {
    console.log('Условие НЕ верно!')
} 
*/
// (условие) ? (условие верно) : (условие не верно);

// 20 < 12 ? console.log('YES') : console.log('NO');
// let greeting;
// let time = 10;
// if (time < 12) {
//   greeting = "Good morning!";
// } else {
//   greeting = "Good afternoon!";
// }
// console.log(greeting);

//================= Конкатенация строк и шаблонные строки ==============

// let greeting = "Hi, Vlad!";
// let howAreYou = " Whats up?";
// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// конкатенация 'строка' + 'строка'

// const userName = "Vlad";
// console.log("Hi, " + userName + "! Whats up?");

// шаблонные строки
//шаблонные строки и интерполяция
// console.log(`Hi, ${userName}!  Whats up?`);

// ============= Функции ===============
// DRY - dont repeat yourself

// console.log('Hello, dear user!');

// function sayHi() {
//     console.log('Hello, dear user!');
// }

// sayHi()

// function declaration
// function sayHi() {
//     alert('nigger')
// }

//function expression
// const sayHi = function () {
//     console.log('nigger')
// }

// ======= Параметры и аргументы для функции =========
// const userName = 'Vlad'
// console.log(`Hello, ${userName}! How are you?`)

/*
function sayHi(name) {
    console.log(`Hello, ${name}! How are you?`)
}

sayHi('Bob')
sayHi('Negr')
sayHi('Daun')
*/

// ========= return ========

// function summ (a, b) {
//     const result = a + b
//     return result
// }

// let res = summ (10, 15)
// console.log(res)

//============= Функция как аргумент ===============

/*
function summ(a, b) {
  return a + b;
}

// const result = summ(summ(15, 15), summ(20, 20));
// console.log(result);

function diff(a, b) {
  return a - b;
}
function doSomething(func) {
  let x = 228;
  let y = 1488;
  let result = func(x, y);
  console.log(result);
}

doSomething(diff);
*/

//===========Самовызывающаяся функция (IIFE)=====================
/*
(function () {
  console.log('Здарова!')
})();


let res = (function (a, b) {
  return a + b;
})(10, 15);
console.log(res);
*/

//==========Стрелочные функции=========

// function sayHi(name) {
//   console.log(`Hello ${name}! How are you doing today?`);
// }
// sayHi("Vlad");

// const arrSayHi = (name) => {
//   console.log(`Hello ${name}! How are you doing today?`);
// };
// arrSayHi("Vlad");

// const arrSayHi = (name) => console.log(`Hello ${name}! How are you doing today?`);
// arrSayHi("Vlad");

// function summ(a, b) {
//   const result = a + b;
// }



// const summ = (a, b) => {
//   return a + b;
// };



const summ = (a, b) => a + b;
const res = summ (228, 1488)
console.log(res)