"use strict";
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
function shoppingCart(arr) {
    arr.splice(arr.length, 0, "Chocolates", "Snacks", "Tissue");
    console.log("After add a items", arr);
    arr.splice(arr.length - 5, 1);
    console.log("After remove a items", arr);
    arr.splice(arr.length - 1, 1, "Toys");
    console.log("After update a items", arr);
}
let array1 = ["Biscuit", "Shampoo", "Oil"];
console.log(array1);
shoppingCart(array1);
