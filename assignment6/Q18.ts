// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const colors: string[] = ["Red", "Green", "Blue"];

// Intentionally access an out-of-range index
const indexError = colors[3]; // Accessing an index that doesn't exist

// Attempt to print the result
console.log(indexError);

// Access a valid index
const validIndex = colors[1]; // Accessing index 1 (Green)

// Print the result
console.log(validIndex);
