function btnClick(){
    //изменяем текст в контейнере
    textContainer.innerHTML = "<u>New text</u>";
}

//получаем ссылку на кнопку и контейнер текста
const textContainer = document.getElementById("textContainer");
const changeTextBtn = document.getElementById("changeTextBtn");

//Добавляем обработчик события клика на кнопку
changeTextBtn.addEventListener("click", btnClick);