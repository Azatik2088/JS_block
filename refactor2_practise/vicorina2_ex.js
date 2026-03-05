alert("Добро пожаловать на викторину!");
let first_question = Number(prompt("Первый вопрос: Скольлько будет 2 + 2?\n1\n2\n4\n"));
let count = 0;

//первый вопрос
if(!Number.isNaN(first_question))
{
    if(first_question === 4){
        count++;
    }
} else{
    alert("Неправильный ввод! Пожалуйста, введите число.");
}


//второй вопрос
let second_question = Number(prompt("Второй вопрос: Сколько будет 5 * 6?\n11\n30\n56\n"));

if(!Number.isNaN(second_question))
{
    if(second_question === 30){
        count++;
    }
} else{
    alert("Неправильный ввод! Пожалуйста, введите число.");
}


//третий вопрос
let thirdQuestion = String(prompt("Что означает слово 'cat' [кошка, собака]"));
let niceThirQuestion = thirdQuestion.toLowerCase().trim();

if(niceThirQuestion === "кошка"){
    count++;
}else{
    alert("Неправильный ответ! Правильный ответ: кошка.");
}



if (count == 3){
    alert("Поздравляем, ты гений");
}
else if (count == 2){
    alert("Вы ответили на два вопроса правильно, почти гений");
}
else if (count == 1){
    alert("Вы ответили на один вопрос правильно, немного до почти гения");
}
else {
    alert("Это фиаско братан");
}
