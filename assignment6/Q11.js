"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner gathering. We would be honored to have your presence at our event. Please let us know if you can attend.\n`);
});
