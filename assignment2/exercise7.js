"use strict";
var dayNum = 2;
if (dayNum >= 1 && dayNum <= 7) {
    if (dayNum == 1) {
        console.log("Monday");
    }
    else if (dayNum == 2) {
        console.log("Tuesday");
    }
    else if (dayNum == 3) {
        console.log("Wednesday");
    }
    else if (dayNum == 4) {
        console.log("Thursday");
    }
    else if (dayNum == 5) {
        console.log("Friday");
    }
    else if (dayNum == 6) {
        console.log("Saturday");
    }
    else {
        console.log("Sunday");
    }
}
else {
    console.log("Invalid input enter a number between (1-7)");
}
