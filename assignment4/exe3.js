"use strict";
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let arr = [10, 21, 22, 23, 25, 56];
console.log("Before any deletion", arr);
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
        arr.splice(i, 1);
    }
}
console.log("After deletion", arr);
