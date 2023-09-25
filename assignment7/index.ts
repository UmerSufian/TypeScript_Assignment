import inquirer from "inquirer"

let userInput=await inquirer.prompt([
    {
        name:"value1",
        type:"number",
        message:"Enter first value",
    },
    {
        name:"value2",
        type:"number",
        message:"Enter second value",
    },
    {
        name:"operator",
        type:"list",
        message:"Enter operation you want to perform(*,+,-,/,%,^)",
        choices:["*","+","-","/","%","^"],
    }
])
switch(userInput.operator){
    case "*":
        console.log(`${userInput.value1} * ${userInput.value2} = ${userInput.value1*userInput.value2}`);
        break;
    case "+":
        console.log(`${userInput.value1} + ${userInput.value2} = ${userInput.value1+userInput.value2}`);
        break;
    case "-":
        console.log(`${userInput.value1} - ${userInput.value2} = ${userInput.value1-userInput.value2}`);
        break;
    case "/":
        if(userInput.value2==0)
        {
            console.log("Division by zero is not allowed!");   
            break;
        }
        else{
            console.log(`${userInput.value1} / ${userInput.value2} = ${userInput.value1/userInput.value2}`);
            break;
        }
    case "%":
        console.log(`${userInput.value1} % ${userInput.value2} = ${userInput.value1%userInput.value2}`);
        break;
    case "^":
        console.log(`${userInput.value1} ^ ${userInput.value2} = ${Math.pow(userInput.value1, userInput.value2)}`);
        break;    
    default:
        console.log("Please enter correct operation....!");
}

