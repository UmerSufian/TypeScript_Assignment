"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["charlie", "Chaplin", "Danny", "Williams"];
function show_magicians(name) {
    console.log(name, "\n");
}
show_magicians(magicians);
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(value) {
    for (let i = 0; i < value.length; i++) {
        value[i] = `The Great ${value[i]}`;
    }
}
make_great(magicians);
//Modified list
show_magicians(magicians);
