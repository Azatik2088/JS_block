let amount = 1234;
let bonus;

if (amount >= 1000) {
    bonus = Math.floor(amount / 10);
} else {
    bonus = 0;
}

console.log(bonus);
