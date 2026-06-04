const user = {
    name: "Azat",
    age: 67,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

user.newLogic = () => console.log("New logic added to user object");
user.newLogic()