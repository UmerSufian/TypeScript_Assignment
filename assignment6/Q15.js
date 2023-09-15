"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Define an array of places to visit
let placesToVisit = ["Paris", "Tokyo", "New York", "Machu Picchu", "Sydney"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Create a copy of the array and sort it alphabetically
let sortedArray = [...placesToVisit].sort();
// Print the sorted array
console.log("\nAlphabetical Order:");
console.log(sortedArray);
// Show that the original array is still in its original order
console.log("\nOriginal Order (Still Intact):");
console.log(placesToVisit);
// Create a copy of the array and sort it in reverse alphabetical order
let reverseSortedArray = [...placesToVisit].sort().reverse();
// Print the reverse sorted array
console.log("\nReverse Alphabetical Order:");
console.log(reverseSortedArray);
// Show that the original array is still in its original order
console.log("\nOriginal Order (Still Intact):");
console.log(placesToVisit);
// Reverse the order of the original array
placesToVisit.reverse();
// Print the reversed array
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the original array again to restore its original order
placesToVisit.reverse();
// Print the array to show it's back to its original order
console.log("\nBack to Original Order:");
console.log(placesToVisit);
// Sort the original array alphabetically
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the original array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
// Print the array to show that its order has been changed to reverse alphabetical
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
