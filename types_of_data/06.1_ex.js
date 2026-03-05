let number = 19; //numbers
let string = "string"; //strings

let isTrue = true; //boolean
let check = 1 > 3; //boolean

let undefinedValue;
console.log(undefinedValue); //undefined

//object
let obj = {
    name: "Jane",
    age: 30,
    city: "Smolensk",
    proession: "teacher",
    hobbies: ["reading", "hiking", "cooking"],
    isMarried: false,
};

//array - частный случай Array
let numbers = [1, 2, 3, 4, 5]
let words = [
    "one",
    "two",
    "three",
    "four",
    "five"
];

//function
const welcomeUser = function(name){
    console.log("Hello, " + name + "!");
};

const greetUser = name => {
    console.log("Hello, " + name + "!")
};

/* Symbol: представляет уникальное и изменяемое значение.
Символы часто используются в качестве уникальных идентификаторов
для объектов */

const mySymbol = Symbol();

const myJbject = {
    [mySymbol]: "Значение символа",
    name: "Jane",
    age: 30
};

//BigInt
const bigNumber = 12312432557234758437509257427525723475934
45734205723457245823407594752387547504375243805423052345234
572348574305728395n;
