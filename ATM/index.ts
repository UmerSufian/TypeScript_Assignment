// Develop a TS program that show the working of an ATM machine such

// - User should login by entering his/her unique account number and a secret PIN
// - User can check account balance 
// - User can withdraw money 
// - User can check his/her previous transections in the current login
// - User should be asked at the end of each function that if he/she wants to end transections or perform any other transections if the user choose more transections he/she must be shown all the options again and he / she can perform any transections.

// In the current login means if user logged in and performed 5 transections he/she have an option to check these 5 transections
// If he/she choosed to end the transections the data should be removed.

import inquirer from "inquirer";

let accBalance: number = 50000;
let prevTransactions: number[] = [];

async function main() {
  const pin = await inquirer.prompt([
    {
      name: "PIN",
      type: "number",
      message: "Enter your PIN ",
    },
  ]);

  if (pin.PIN === 1111) {
    console.log("Please wait for a moment");

    while (true) {
      let choice = await inquirer.prompt([
        {
          name: "Action",
          type: "list",
          message: "Select operation you want to perform",
          choices: ["AccountBalance", "WithdrawMoney", "PreviousTransaction"],
        },
      ]);

      switch (choice.Action) {
        case "AccountBalance":
          console.log("Account Balance: ", accBalance);
          break;
        case "WithdrawMoney":
          const withdrawMoney = await inquirer.prompt([
            {
              name: "withdrawmoney",
              type: "number",
              message: "Enter Amount",
            },
          ]);
          if (withdrawMoney.withdrawmoney <= accBalance) {
            console.log("Please wait for your transaction.");
            console.log("Transaction completed Successfully.");
            accBalance -= withdrawMoney.withdrawmoney;
            prevTransactions.push(withdrawMoney.withdrawmoney);
          } else {
            console.log("Insufficient funds!");
          }
          break;
        case "PreviousTransaction":
          console.log("Your last transactions are: ");
          prevTransactions.forEach((val) => console.log(val));
          break;
      }

      const option = await inquirer.prompt([
        {
          name: "Option",
          type: "list",
          message: "Do you want to perform a transaction?",
          choices: ["Yes", "No"],
        },
      ]);

      if (option.Option === "No") {
        console.log("Thank you for using our ATM. Goodbye!");
        process.exit(0);
      }
    }
  } else {
    console.log("Your PIN is invalid");
  }
}

main();
