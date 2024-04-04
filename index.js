#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in you todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "what would you like to add more in your todos?",
            default: "true",
        }
    ]);
    todos.push(todosQuestions.firstQuestion);
    console.log(todos);
    condition = todosQuestions.secondQuestion;
}
