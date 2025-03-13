const myObj = {};

const person = {
    // properties
    name: "Bob",
    age: 1527,
    vision: "no",
    canDevourSouls: true,

    // methods
    sayHello() {
        console.log("Salutations, human");
    },
    eatBeans() {
        console.log("Omnomnomnom!");
    },
};

// Recites property of object via a method owned by the console
console.log(person.name);

// Calls method from person object
person.sayHello();

// A method that is not owned by anything is typically called a function
function whatDoesTheFoxSay() {
    console.log("words!");
}

// This calls the above function
whatDoesTheFoxSay();