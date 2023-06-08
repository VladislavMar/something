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



// const summ = (a, b) => a + b;
// const res = summ (228, 1488)
// console.log(res)


//===========Массивы=============

/*
const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 5, 'BMW', true, ['Mazda', 'Toyota'], 70];  
console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands[2]);
autoBrands.length;
console.log(autoBrands.length); //длинна массива, кол-во элементов
*/

//=============Методы массивов==============

/*
push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из нчала массива
arr.unshift(...intems) - Добавить элемент в начало массива 
arr.splice([start]], [deleteCount, [newElements])
*/

/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
autoBrands.push('Nissan');
console.log(autoBrands);
autoBrands.splice(2, 1);
console.log(autoBrands);
*/
//============Циклы============
/*
console.log('Start');
for (let i = 0; i < 5; i++) {
  console.log(i);
}  
console.log('Finish');
*/
//===============Обход массива циклом for=============

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);

// for (i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i]);
// }

//===============Обход массива циклом for (of)===============
/*
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

for(let brand of autoBrands) {
  console.log(brand)
}
*/
//============= Обход массива методом forEach() =======================

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

// autoBrands.forEach(function (brand, i) {
//   console.log(`${brand} => ${i}`);
// })
/*
autoBrands.forEach(printBrand)

function printBrand (brand, i) {
  console.log(`${brand} => ${i}`);
}
*/

// autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`));

 
//============ Объекты ================
// Свойства объектов

let userName = 'Vlad';
let age = 30;
let isMarried = false;

const person = {
  userName: 'Vlad',
  age: 30,
  isMarried: false,
  // profession: 'Web Developer'
}

console.log(person);
console.log(person.userName);
console.log(person['age']);

// let propertyName = 'profession';
// console.log(person[propertyName])

person.profession = 'JS developer'
console.log(person);

delete person.age;
console.log(person);