"use strict";
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sum(arr2) {
    let k = 0;
    let result = 0;
    while (k <= arr2.length - 1) {
        result += arr2[k];
        k++;
    }
    return result;
}
let array5 = [20, 30, 65, 71];
let res = sum(array5);
console.log("The sum of array is : ", res);
