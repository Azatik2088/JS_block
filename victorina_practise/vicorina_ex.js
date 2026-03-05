alert("Добро пожаловать на викторину!");
let first_question = Number(prompt("Первый вопрос: Скольлько будет 2 + 2?\n1\n2\n4\n"));
let count = 0;

if(!Number.isNaN(first_question))
{
    if(first_question === 4){
        count++;
    }
} else{
    alert("Неправильный ввод! Пожалуйста, введите число.");
}

let second_question = Number(prompt("Второй вопрос: Сколько будет 5 * 6?\n11\n30\n56\n"));


if(!Number.isNaN(second_question))
{
    if(second_question === 30){
        count++;
    }
} else{
    alert("Неправильный ввод! Пожалуйста, введите число.");
}

if (count == 2){
    alert("Поздравляем! Вы ответили на все вопросы правильно!");
}
else if (count == 1){
    alert("Вы ответили на один вопрос правильно. Попробуйте еще раз!");
}
else {
    alert("К сожалению, вы не ответили ни на один вопрос правильно. Попробуйте еще раз!");
}
