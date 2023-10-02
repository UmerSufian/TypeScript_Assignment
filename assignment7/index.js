"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let userInput = await inquirer_1.default.prompt([
    {
        name: "value1",
        type: "number",
        message: "Enter first value",
    },
    {
        name: "value2",
        type: "number",
        message: "Enter second value",
    },
    {
        name: "operator",
        type: "list",
        message: "Enter operation you want to perform(*,+,-,/,%,^)",
        choices: ["*", "+", "-", "/", "%", "^"],
    }
]);
switch (userInput.operator) {
    case "*":
        console.log(`${userInput.value1} * ${userInput.value2} = ${userInput.value1 * userInput.value2}`);
        break;
    case "+":
        console.log(`${userInput.value1} + ${userInput.value2} = ${userInput.value1 + userInput.value2}`);
        break;
    case "-":
        console.log(`${userInput.value1} - ${userInput.value2} = ${userInput.value1 - userInput.value2}`);
        break;
    case "/":
        if (userInput.value2 == 0) {
            console.log("Division by zero is not allowed!");
            break;
        }
        else {
            console.log(`${userInput.value1} / ${userInput.value2} = ${userInput.value1 / userInput.value2}`);
            break;
        }
    case "%":
        console.log(`${userInput.value1} % ${userInput.value2} = ${userInput.value1 % userInput.value2}`);
        break;
    case "^":
        console.log(`${userInput.value1} ^ ${userInput.value2} = ${Math.pow(userInput.value1, userInput.value2)}`);
        break;
    default:
        console.log("Please enter correct operation....!");
}
