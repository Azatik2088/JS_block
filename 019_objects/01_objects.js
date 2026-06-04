//создание объектов 

//Литерал объекта
const person = {
    name: "Azat",
    age: 67,
    isStudent: false
};

//С помощью new Object()
const car = new Object();
car.make = "Lada";
car.model = "2112";
car.year = 2029;


//Создание объекта с помощью функции
function Book(title, author){
    this.title = title;
    this.author = author;
}
const book = new Book("Title", "author")


//Наполнение: свойства и методы
const user = {
    name: "Azat",
    age: 67,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(user.name); // Azat
user.greet(); // Hello, my name is Azat
console.log(user["age"]); // 67

//итерация по свойствам объекта
for(let key in user){
    console.log(key + ": " + user[key]);
}