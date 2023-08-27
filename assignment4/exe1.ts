// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

let sum:number=0;
let maxLength:number=20
for(let i=1;i<=maxLength;i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log(`The sum of first ${maxLength} even numbers are : ${sum}`);
