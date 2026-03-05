let num = 10; 
console.log(">> num");
console.log(num); // 10
console.log(typeof num); // number


let floatNum = 3.14;
console.log(">> floatNum");
console.log(floatNum); // 3.14
console.log(typeof floatNum); // number


let str = "Hello, World!"; // " ", ' ', ` `
console.log(">> str");
console.log(str); // Hello, World!
console.log(typeof str); // string


let bool = true;
console.log(">> bool");
console.log(bool); // true
console.log(typeof bool); // boolean


let nullValue = null;
console.log(">> nullValue");
console.log(nullValue); // null
console.log(typeof nullValue); // object (это особенность JavaScript)


let undefinedValue;
console.log(">> undefinedValue");
console.log(undefinedValue); // undefined
console.log(typeof undefinedValue); // undefined


let array = [1, 2, 3, 4, 5];
console.log(">> array");
console.log(array); // [1, 2, 3, 4, 5]
console.log(typeof array); // object (массивы в JavaScript являются объектами)


let obj = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(">> obj");
console.log(obj); // { name: 'Alice', age: 25, city: 'New York' }
console.log(typeof obj); // object


function greet(name) {
    console.log("Hello, " + name + "!");
}
const greet2 = (name) => console.log("Hello, " + name + "!");

console.log(">> greet");
console.log(greet); // [Function: greet]
console.log(typeof greet); // function


let symbol = Symbol("описание");
console.log(">> symbol");
console.log(symbol); // Symbol(описание)
console.log(typeof symbol); // symbol


const bigIntNum = 1234567890123456789012345678901234567890n;
console.log(">> bigIntNum");
console.log(bigIntNum);
console.log(typeof bigIntNum); // bigint