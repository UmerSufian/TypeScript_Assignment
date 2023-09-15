"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Size: ${size.toUpperCase()}, Message: ${message}`);
}
console.log("Default large shirt:");
make_shirt();
console.log("\nMedium shirt with default message:");
make_shirt('medium');
console.log("\nCustom-sized shirt with custom message:");
make_shirt('small', 'Upside Down');
