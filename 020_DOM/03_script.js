//Получаем ссылку на кнопку и контейнер списка
const addListBtn = document.getElementById("addListBtn");
const listContainer = document.getElementById("listContainer");

//Добавляем обработчик события клика на кнопку
addListBtn.addEventListener("click", function(){
    //создаем новый элемент списка
    const listItem = document.createElement("li");
    listItem.textContent = "Новый элемент списка"

    //Добавляем элемент в контейнер списка
    listContainer.appendChild(listItem);
})