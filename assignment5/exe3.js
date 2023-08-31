"use strict";
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits = ["apple", "banana", "cherry", "date", "grape"];
let newArray = fruits.filter((fruit) => {
    if (fruit.length > 5) {
        return true;
    }
});
console.log(newArray);
