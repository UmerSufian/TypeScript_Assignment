"use strict";
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let array2 = [2, 3, 6, -2, 5, 9];
for (let j = 0; j <= array2.length - 1; j++) {
    if (array2[j] < 0) {
        array2.splice(j, 1);
    }
}
console.log(array2);
