const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", function() {
    // Ввод данных
    const amount = Number(document.getElementById("countOfAmount").value);
    const percent = Number(document.getElementById("percentTip").value);
    const people = Number(document.getElementById("countOfPeople").value);

    if (amount < 0 || percent < 0 || people <= 0) {
        alert("Пожалуйста, введите корректные положительные значения.");
        return; // Прерываем выполнение функции, если данные некорректны
    }

    // Подсчет параметров
    const totalTip = amount * (percent / 100);
    const totalSum = amount + totalTip;
    const personShare = totalSum / people;

    // Вывод результата
    document.getElementById("Tip").textContent = `Чаевые ${totalTip.toFixed(2)}`;
    document.getElementById("AllSum").textContent = `Общая сумма: ${totalSum.toFixed(2)}`;
    document.getElementById("sumForPerson").textContent = `Общая сумма на человека: ${personShare.toFixed(2)}`;
});