"use strict";
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let numb = [3, 6, 9, 12, 15, 18];
let newNum = numb.filter((value) => value % 2 != 0).map((val) => val + val);
console.log(newNum);
