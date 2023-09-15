// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const favoritePizzas: string[] = ['Pepperoni', 'Peri Peri', 'Supreme'];

console.log("My favorite pizzas:");

for (let i=0;i<favoritePizzas.length;i++) {
    console.log(favoritePizzas[i]);
}

// Modify the loop to print sentences about each pizza
console.log("\nSentences about my favorite pizzas:");

for (let j=0;j<favoritePizzas.length;j++) {
    console.log(`I like ${favoritePizzas[j]} pizza.`);
}

// Add a final statement about how much you like pizza
console.log("\nI really love pizza!");
