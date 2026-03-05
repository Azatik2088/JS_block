console.log(isNaN(0/0)); //true
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("NaN")); //false
console.log(Number.isNaN(0/0)); //true
console.log(isNaN(NaN)); //true

let value = 0/0; 
console.log(value); //NaN

