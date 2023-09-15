"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
const string1 = "Hello";
const string2 = "World";
console.log("Equality Test:", string1 === string2); // False
console.log("Inequality Test:", string1 !== string2); // True
// Tests using the lower case function
const str1 = "Hello";
const str2 = "hello";
console.log("Lowercase Equality Test:", str1.toLowerCase() === str2); // True
console.log("Lowercase Inequality Test:", str1.toLowerCase() !== str2); // False
// Numerical tests involving equality, inequality, greater than, less than,
// greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log("Equality Test:", num1 === num2); // False
console.log("Inequality Test:", num1 !== num2); // True
console.log("Greater Than Test:", num1 > num2); // True
console.log("Less Than Test:", num1 < num2); // False
console.log("Greater Than or Equal To Test:", num1 >= num2); // True
console.log("Less Than or Equal To Test:", num1 <= num2); // False
// Tests using "and" and "or" operators
const isSunny = true;
const isWarm = true;
console.log("AND Operator:", isSunny && isWarm); // True
console.log("OR Operator:", isSunny || isWarm); // True
// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry", "date"];
const targetFruit = "banana";
console.log("Is in Array Test:", fruits.includes(targetFruit)); // True
// Test whether an item is not in an array
const forbiddenFruit = "kiwi";
console.log("Is Not in Array Test:", !fruits.includes(forbiddenFruit)); // True
