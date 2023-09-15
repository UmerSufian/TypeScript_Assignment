// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

const guest_List: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

guest_List.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});

const guestCantMakeIt = "Marie Curie";
console.log(`${guestCantMakeIt} can't make it to the dinner.\n`);

const indexOfGuestCantMakeIt = guest_List.indexOf(guestCantMakeIt);

if (indexOfGuestCantMakeIt !== -1) {
  guest_List[indexOfGuestCantMakeIt] = "Nikola Tesla"; 
}

guest_List.forEach(person => {
  console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});
