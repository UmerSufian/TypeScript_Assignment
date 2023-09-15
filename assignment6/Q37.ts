
function makeSandwich(...items: string[]) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } 
    else 
    {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item) {
            console.log("- " + item);
        });
    }
    console.log("\n");
}

makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich(); 



