import inquirer from "inquirer";
import chalk from "chalk";
// Define the currency and their exchange rate
let exchange_rate = {
    "USD": 1,
    "EURO": 0.9,
    "RIYAL": 3.75,
    "TAKA": 109.6,
    "YAUN": 7.23,
    "DIRHAM": 3.67,
    "PKR": 277.5, // Pakistani Rupee 
};
// Prompt the user to select currency to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.blue("Select the currency to convert from:"),
        choices: ["USD", "EURO", "RIYAL", "TAKA", "YAUN", "DIRHAM", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blue("Select the currency to convert into:"),
        choices: ["USD", "EURO", "RIYAL", "TAKA", "YAUN", "DIRHAM", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.magenta("Enter the amount to convert:")
    }
]);
// Perform currency conversion using formula
let amount = +user_answer.amount; // Using unary plus operator for conversion
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Converted amount
console.log(chalk.green(`Converted Amount: ${converted_amount}`));
