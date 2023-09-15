"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let n = "Ahmed Tahir";
console.log("Lowercase Name:", n.toLowerCase());
console.log("Uppercase Name:", n.toUpperCase());
const titlecaseName = n
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log("Titlecase Name:", titlecaseName);
