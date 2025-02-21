'use strict';
/*
Challenge Problem:

You are designing a simple inventory system for a small store. Create an object called 'store' with the following properties:

- name (store name)
- location (store location)
- inventory (an array of objects, each representing a product with properties: name, price, and quantity)
- a method 'totalInventoryValue' that calculates and returns the total value of all products (price * quantity)

Once you've created the store object, log the total inventory value by calling the method.
*/
let store = {
    name: "O'reily's",
    location: "San Francisco",
    inventory: [
        { item: "Oil", price: 25.99, inv: 42 },
        { item: "Oil Filter", price: 15.99, inv: 23}
        
    ]
}
console.log(store.name)
console.log(store.inventory)