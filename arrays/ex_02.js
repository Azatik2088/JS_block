const array = [];
let sum = 0;

for (let index = 0; index < 10; index++) {
    const element = Math.floor(Math.random() * 10); 
    array.push(element);
    sum += element;
}
console.log(array);
console.log(sum);
