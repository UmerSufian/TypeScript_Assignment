"use strict";
const gList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
gList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});
const cantMakeIt = "Marie Curie";
console.log(`${cantMakeIt} can't make it to the dinner.\n`);
var indexOf_GuestCantMakeIt = gList.indexOf(cantMakeIt);
if (indexOf_GuestCantMakeIt !== -1) {
    gList[indexOf_GuestCantMakeIt] = "Nikola Tesla";
}
gList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});
console.log("Great news! We found a bigger dinner table.\n");
gList.unshift("Ronaldo");
gList.splice(gList.length / 2, 0, "Messi");
gList.push("Elon Musk");
gList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry for inconvience We are invited only two guests for the dinner \n");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (gList.length > 2) {
    const removedPerson = gList.pop();
    console.log(`Dear ${removedPerson}, sorry, we can't invite you to dinner.\n`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
gList.forEach(person => {
    console.log(`Dear ${person},You are still invited\n`);
});
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`We're invited ${gList.length} peoples to the dinner`);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
gList.length = 0;
console.log("Empty list: ", gList);
