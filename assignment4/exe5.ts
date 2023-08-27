// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let list: number[] = [90, 61, 50, 49, 43, 33, 51];
console.log("Before removing failing grades ");
console.log(list);

for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] < 50) {
        list.splice(i, 1);
    }
}

console.log("After removing failing grades ");
console.log(list);
