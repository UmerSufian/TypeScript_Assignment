"use strict";
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let calcius = [25, 40, 30];
let i = 0;
while (i <= calcius.length - 1) {
    let temp = calcius[i];
    let fahrenheit = (temp * 9 / 5) + 32;
    calcius[i] = fahrenheit;
    i++;
}
console.log("Converted Temp of array is : ", calcius);
