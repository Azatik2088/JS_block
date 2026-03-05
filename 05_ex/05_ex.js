// Арифметические операторы 
let num1 = 10;
let num2 = 20;

console.log(num1 + num2); // 30
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // остаток от деления

// Операторы и приоритет операций
let x = 9;
let y = 4;

console.log(`Порядок операций: ${(x + y) * 4}`);

// Инкремент и декремент
let a = 5;
a++;
console.log(`Инкремент: ${a}`); //Инкремент

a--;
console.log(`Декремент: ${a}`); //Декремент 

//Присваивание с математикой \
let number = 52;
number+= 10;
console.log(number);
number-=5;
console.log(number);
number*=4;
console.log(number)
number/=32;
console.log(number)

//Некоторое замечание
let count = 10;
let newCount = 0;
console.log(`count: ${count}, newCount: ${newCount}`);

newCount = count++;
// newCount = count--
console.log(`count: ${count}, newCount: ${newCount}`);

count = 10;
newCount = 0;

newCount = ++count;
// newCount = --count
console.log(`count: ${count}, newCount: ${newCount}`);

count = 10;
newCount = 2;

let z = count++ + ++newCount;
console.log(count);
console.log(newCount);
console.log(z);