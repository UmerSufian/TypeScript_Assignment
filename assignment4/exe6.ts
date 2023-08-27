// - Write a program that uses a function to find the largest element in an array of numbers.

function element(a:number[]){
    let max=0;
    for(let i=0;i<=a.length-1;i++){
        for(let j=i;j<=a.length-1;j++)
        {
            if(a[j+1]<a[i])
            {
                let temp=a[i];
                a[i]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    max=a[a.length-1];
    console.log("The largest element in the array is ",max);

    
}

let arr1:number[]=[5,20,19,100,6,90,8];
element(arr1);