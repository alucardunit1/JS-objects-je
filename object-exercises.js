'use strict';
// Exercise 1: Create an object representing a car with properties: make, model, year.
let car = {
    make: "Ford",
    model: "Mustang GTD",
    year: 2021
};

// Exercise 2: Access and log the 'model' property from the car object.
console.log(car.model);
// Exercise 3: Add a new property 'color' to the car object and assign it a value.
car.color = "red"
// Exercise 4: Update the 'year' property of the car object.
car.year = 2025
// Exercise 5: Create a method inside the car object that logs a sentence about the car.
car.info = "Inspired by the Mustang GT3 race car, the limited-production GTD is engineered for exceptional performance."
car.about = function() {
    console.log(car.info)
};
car.about();
// Exercise 6: Create an object representing a person with properties: name, age, and address (as a nested object).
let person = {
    name: "Cody",
    age: 20,
    address:"164 Stalkholme lane, Syndrome City, 21548",
}
// Exercise 7: Access the street from the address property inside the person object.
console.log(person.address);
// Exercise 8: Add a method to the person object that returns their full name and age.
console.log(person.name + person.age)
// Exercise 9: Create an array of three book objects, each with properties: title, author, and pages.
const books = [
  {
    title: "A Wrinkle in Time",
    author: "Author1",
    pages: 369,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
  },
];
// Exercise 10: Log the title of the second book in the array.
console.log(books[1].title);