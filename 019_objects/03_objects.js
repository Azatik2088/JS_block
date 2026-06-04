const person = {
    firstName: "Azat",
    lastName: "Khanov",
    age: 67,
    gender: "male",
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "Almaty",
        country: "Kazakhstan"
    },
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
}