// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const _guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

_guestList.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});

const guest_CantMakeIt = "Marie Curie";
console.log(`${guest_CantMakeIt} can't make it to the dinner.\n`);

var indexOf_GuestCantMakeIt = _guestList.indexOf(guest_CantMakeIt);

if (indexOf_GuestCantMakeIt !== -1) {
  _guestList[indexOf_GuestCantMakeIt] = "Nikola Tesla"; 
}

_guestList.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});

console.log("Great news! We found a bigger dinner table.\n");

_guestList.unshift("Ronaldo");
_guestList.splice(_guestList.length/2,0,"Messi");
_guestList.push("Elon Musk");

_guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
  });


