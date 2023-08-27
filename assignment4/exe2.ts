// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let array:number[]=[10,21,22,23,25,56];
console.log("The even numbers in this array is");
for(let i=0;i<=array.length;i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}