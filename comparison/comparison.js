//Оператор равентсва
console.log(5 == 5); //true
console.log(5 == "5"); //true
console.log(0 == 10); //false

//Оператор строгого равенства
console.log(5 === 5); //true
console.log(5 === "5"); //false
console.log(0 === 10); //false

//Оператор неравенства
console.log(5 != 5); //false
console.log(5 != "5"); //false
console.log(0 != 10); //true

//Оператор строгого неравенства
console.log(5 !== 5); //false
console.log(5 !== "5"); //true
console.log(0 !== 10); //true

//Операторы больше и меньше
console.log(5 > 3); //true
console.log(5 < 3); //false
console.log(5 >= 5); //true
console.log(5 <= 4); //false

//Логические операторы
console.log(true && true); //true
console.log(true && false); //false
console.log(false || true); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true


//Преобразование к логическому типу
console.log(!!0); //false
console.log(!!""); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!NaN); //false
console.log(!!"Hello"); //true
console.log(!!3); //true


let data = "Hello";
if (data) {
    console.log("Данные существуют");
} else {
    console.log("Данных нет");
}