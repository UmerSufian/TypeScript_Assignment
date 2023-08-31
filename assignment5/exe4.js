"use strict";
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = numbers.filter((num) => num % 2 === 0).map((val) => val * val);
console.log(arr1);
