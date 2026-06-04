//создание массивов
const array = [1, 2, 3, 4, 5]
const array1 = new Array(1, 2, 3, 4, 5)

//доступ к элементам массива
console.log(array[0]);

//добавление и удалиение элементов массива
array.push(6); //добавление элемента в конец массива
console.log(array);
array.pop(); //удаление последнего элемента массива
console.log(array);

array.unshift(0); //добавление элемента в начало массива
console.log(array);
array.shift(); //удаление первого элемента массива
console.log(array);


//обход массива и спользованием цикла for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//обход массива с помощью for...of
for (const element of array) {
    console.log(element);
}

//обход массива с использованием for...in (не рекомендуется для массивов)
for (const index in array) {
    console.log(array[index]);
}

// Использование метода splice для удаления и вставки элементов
arr.splice(1, 1, "grape", "watermelon"); // Удаляет один элемент с индексом 1 и вставляет "grape" и "watermelon" на его место
console.log(arr); // Выведет ["apple", "grape", "watermelon", "orange"]

// Использование метода slice для создания подмассива
const subArray = arr.slice(1, 3); // Создает подмассив, начиная с индекса 1 (включительно) и заканчивая индексом 3 (не включительно)
console.log(subArray); // Выведет ["grape", "watermelon"]

// Использование метода concat для объединения массивов
const newArr = arr.concat(["pineapple", "melon"]); // Создает новый массив, объединяя текущий массив и переданный массив
console.log(newArr); // Выведет ["apple", "grape", "watermelon", "orange", "pineapple", "melon"]

// Использование метода reverse для изменения порядка элементов
arr.reverse(); // Меняет порядок элементов в массиве на обратный
console.log(arr); // Выведет ["orange", "watermelon", "grape", "apple"]

// Использование метода sort для сортировки элементов
arr.sort(); // Сортирует элементы массива в алфавитном порядке
console.log(arr); // Выведет ["apple", "grape", "orange", "watermelon"]