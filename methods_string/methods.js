//Доступ к символам
let string = "Hello";
console.log(string[0]);
console.log(string.charAt(0));

//Длина строки
console.log(string.length);

//Сложение строк 
let string1 = "Hello, ";
let string2 = "World";
let result = string1 + string2;
console.log(result);

//Верхний и нижний регистр
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//Поиск подстроки
console.log(string.indexOf("l"));
console.log(string.lastIndexOf("l"));
console.log(string.includes("lo"));

//Обрезка строки
console.log(string.slice(1, 4)); //ell
console.log(string.substring(1, 4)); //ell
console.log(string.slice(-3)); //llo

//trimStart, trimEnd, trim
let stringWithSpaces = "   Hello World   ";
console.log(stringWithSpaces.trimStart()); // "Hello World   "
console.log(stringWithSpaces.trimEnd()); // "   Hello World"
console.log(stringWithSpaces.trim()); // "Hello World"

//split
let str = "JavaScript is great great great";
console.log(str.split(" ")); // ["JavaScript", "is", "great", "great", "great"]

//replace
let newString = str.replace("great", "awesome");
console.log(newString); // "JavaScript is awesome great great"
console.log(str.replaceAll("great", "awesome")); // "JavaScript is awesome awesome awesome"
