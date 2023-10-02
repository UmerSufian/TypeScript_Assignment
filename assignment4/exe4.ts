// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

let area = (r:number,p:number) => p*(r*r);

let radius:number=2.3;
const pi:number=3.14;
console.log("The radius of circle is : ",area(radius,pi));
