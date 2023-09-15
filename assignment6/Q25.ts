// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits:string[]=["Peach","Grapes","Strawberry"];

// Check if specific fruits are in the array and print statements accordingly
if (favorite_fruits.includes('Peach')) {
    console.log("I really like apples!");
}

if (favorite_fruits.includes('Grapes')) {
    console.log("I really like bananas!");
}

if (favorite_fruits.includes('Strawberry')) {
    console.log("I really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("I really like oranges!");
} else {
    console.log("Oranges are not in the list of favorite fruits.");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("I really like kiwis!");
} else {
    console.log("Kiwis are not in the list of favorite fruits.");
}

