'use strict'
//Objects

//Create an object
let person = {
    name: "Alice",
    age: 25,
    city: "New York",
}
console.log(person);

// Accessing Properties
    // Dot notation: object.property (Preferred method)
    console.log(person.age); //  25

    // Bracket notation: object["property"]
    console.log(person["age"]) // 25

// Adding/Updating Properties to Objects
    // Update existing Properties
    person.age = 26;
    console.log(person.age);

    person.name = "Alexandra"
    console.log(person.name);
    console.log(person);

    // Adding new properties
    person.job = "Software Engineer"; // Adds new property job to the object
    person.favFood = "Burger"; // Adds new property favFood to the object

    console.log(person.job);
    console.log(person); //person.favFood and person.job is now in the object
    console.log(person.hobby); // result: undefined, when you try to access a property that is not in an object you get 

// Deleting Properties
    delete person.favFood;
    console.log(person.favFood); // result: undefined, after deleting a property its undefined when you try to access it
    console.log(person); // the object no longer has the property

// What can an Object store?

    //An object can be stored within an object, this is called a nested object.
    person.office = {
        desk: "standing",
        postion: "Corner",
        number: 67,
    };

    console.log(person.office); // The office is an object with details about her office
    console.log(person);

    // An array can be stored in an object
    person.groceries = ["eggs", "milk", "ramen", "lettuce"]; // Creating a property that stores an array

    console.log(person.groceries);
    console.log(person);

    console.log(person.groceries[0]); // You can access elements on the array using our array methods

// Adding a method to an object (Functions inside Objects)
// Adding a function to an obj allows us to define behavior of the object. 
    let pet = {
        type: "dog",
        name: "buddy",
        bark: function() {
            console.log("Woof Woof");
        },
    }

    pet.bark(); // You can access the function and run it

