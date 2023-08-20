// - Write a program that uses a while loop to print the first 10 even numbers.

let num1:number=1;
console.log("The first 10 even numbers are");
while(num1<=10)
{
    if(num1%2==0)
    {
        console.log(num1);
    }
    num1++;
}