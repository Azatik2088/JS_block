let people = parseFloat(prompt("Введите количество человек: "));
let money = parseFloat(prompt("Введите сумму денег: "));
let tips = parseFloat(prompt("Введите процент чаевых: "));

if (people > 0 && money > 0 && tips >= 0){
    let totalTips = money * (tips / 100);
    let totalAmount = money + totalTips;
    let amountPerPerson = totalAmount / people;

    alert(`Сумма на каждого человека: ${amountPerPerson.toFixed(2)}`);
    alert(`Общая сумма с чаевыми: ${totalAmount.toFixed(2)}`);
} else {
    alert("Пожалуйста, введите корректные значения для количества человек, суммы денег и процента чаевых.");
}

//эквивалентный код для данной задачи

// let count = Number(prompt("Введите количество человек: "));
// if (Number.isNaN(count) || count <= 0 || !Number.isInteger(count)) {
//     alert("Пожалуйста, введите корректное количество человек (целое число больше 0).");
// } 
// else 
// {
//     let money = Number(prompt("Введите сумму денег: "));
//     if (Number.isNaN(money) || money < 0) {
//         alert("Пожалуйста, введите корректную сумму денег (число больше 0).");
//     } else {
//         let tips = Number(prompt("Введите процент чаевых: "));
//         if (Number.isNaN(tips) || tips < 0) {
//             alert("Пожалуйста, введите корректный процент чаевых (число не меньше 0).");
//         } else {
//             let totalTips = money * (tips / 100);
//             let totalAmount = money + totalTips;
//             let amountPerPerson = totalAmount / count;}
//             alert(`Сумма на каждого человека: ${amountPerPerson.toFixed(2)}`);
//         }
// }

//Number.IsNan()
//isNaN()