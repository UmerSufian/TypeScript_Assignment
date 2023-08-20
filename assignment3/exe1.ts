//  - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function spliceMethod(arr:string[],arrIndex:number,value:string){
    arr.splice(arrIndex,0,value);
    return arr;
}

let array:string[]=["Ali","Khubaib","Hanan","Mesum"];
console.log("Before splice method",array);
spliceMethod(array,1,"Umer");
console.log("After splice method",array);