//Пример с использованием if
let age = 25;

if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}


//Примет с использованием if-else if-else
let num = 0;

if (num > 0) {
    console.log("Число положительное");
} else if (num < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}


//Пример с ипользованием нескольких блоков if-else
let score = 85;

if (score >= 90) {
    console.log("Отлично");
} else if (score >= 80) {
    console.log("Хорошо");
} else if (score >= 70) {
    console.log("Удовлетворительно");
} else {
    console.log("Плохо");
}


//Пример с использованием вложенного if
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    if (num1 % 2 == 0) {
        console.log("Первое число больше второго и оно четное");
    } else {
        console.log("Первое число больше второго и оно нечетное");
    }
}
else{
    console.log("Второе число больше первого");
}