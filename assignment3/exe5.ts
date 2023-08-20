// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function factorial(val: number) {
    let fact: number = 1;
    let i: number;
    for (i = val; i > 1; i--) {
        fact = fact * i;
    }
    console.log(`The factorial of ${val} is`, fact);
}

let num3: number = 5;
factorial(num3);