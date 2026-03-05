let people = parseFloat(prompt("Введите количество человек: "));
let money = parseFloat(prompt("Введите сумму денег: "));
let tips = parseFloat(prompt("Введите процент чаевых: "));

let countMoneyForPerson = (money + (money * tips / 100)) / people;
alert("Каждый человек должен заплатить: " + countMoneyForPerson.toFixed(2));