"use strict";
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum = 0;
let maxLength = 20;
for (let i = 1; i <= maxLength; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(`The sum of first ${maxLength} even numbers are : ${sum}`);
