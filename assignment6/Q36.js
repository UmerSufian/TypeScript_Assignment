"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ["charlie", "Chaplin", "Danny", "Williams"];
function show_magician(name) {
    console.log(name, "\n");
}
function makegreat(magiciansArray) {
    const modifiedMagicians = [];
    for (let i = 0; i < magiciansArray.length; i++) {
        modifiedMagicians.push(`the Great ${magiciansArray[i]}`);
    }
    return modifiedMagicians;
}
// Display the modified magicians
console.log("\nGreat Magicians:");
show_magician(makegreat(magician));
console.log("\nOriginal Magicians:");
show_magician(magician);
