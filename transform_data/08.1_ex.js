//Преобразование строку
let numToStr = 10;
let toStr = String(numToStr);
console.log(toStr);
console.log(typeof toStr);
console.log(typeof toStr);

//Преобразование число
let strToNum = "20";
console.log(Number(11 == 11)); //1
let toNum = Number(strToNum);

//Преобразование к логическому типу
let strToBool = "Hello";
let toBool = Boolean(strToBool); 


//Неявное преобразование
let implicitConversion = 10 + "5"; //105
console.log(implicitConversion);

//Неявное преобразование при сравнении
console.log(5 == "5"); //true
console.log(10 === "10"); //false

//Неявное преобразование типов
let num = 10
let str = "5";
let result = num.toString() + str; //"1020"

//Неправильное использование операторов сравнения
if (num == str){
    console.log("Число и строка равны"); 
}


