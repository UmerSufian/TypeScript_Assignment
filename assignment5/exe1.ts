// Write a program that uses filter to remove all negative numbers from an array of numbers

let num:number[]=[2,3,6,-9,9,-11];

let updated=num.filter((val:number)=>{
    if(val>0)
    {
        return true;
    }
});
console.log(updated);
