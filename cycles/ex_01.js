//Цикл while используется для вывода чисел от 0 до 4
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


//Цикл for используется для вывода чисел от 0 до 4
for (let j = 0; j < 5; j++) {
    console.log(j);
}


//Цикл do...while используется для вывода чисел от 0 до 4
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


//Пробежали по строке
let str = "Hello, World!";
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    console.log(`>${element}<`);
}


//Еще один способ пробежаться по строке
for (const element of object) {
    console.log(`[${element}]`);
}


//работа с объектами
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
}