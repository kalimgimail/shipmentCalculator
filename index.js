"use strict";
// const inquirer = require('inquirer');
// const chalk = require('chalk');
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("inquirer");
var module_2 = require("chalk");
// Define mathematical operations as an enum
var Operation = {
    ADD: 'Addition',
    SUB: 'Subtraction',
    MUL: 'Multiplication',
    DIV: 'Division',
};
function runCalculator() {
    module_1.inquirer
        .prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select a mathematical operation:',
            choices: Object.values(Operation),
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you want to perform another calculation?',
            default: false,
        },
    ])
        .then(function (answers) {
        var operation = answers.operation, num1 = answers.num1, num2 = answers.num2, wantToContinue = answers.continue;
        var result;
        switch (operation) {
            case Operation.ADD:
                result = num1 + num2;
                break;
            case Operation.SUB:
                result = num1 - num2;
                break;
            case Operation.MUL:
                result = num1 * num2;
                break;
            case Operation.DIV:
                result = num1 / num2;
                break;
            default:
                console.log('Invalid operation.');
                return;
        }
        console.log(module_2.chalk.bold.green('Result:'), "".concat(num1, " ").concat(module_2.chalk.bold.cyan(getOperationSymbol(operation)), " ").concat(num2, " = ").concat(module_2.chalk.bold.yellow(result)));
        if (wantToContinue) {
            runCalculator(); // Continue with another calculation
        }
        else {
            console.log('Goodbye!');
        }
    });
}
function getOperationSymbol(operation) {
    switch (operation) {
        case Operation.ADD:
            return '+';
        case Operation.SUB:
            return '-';
        case Operation.MUL:
            return '*';
        case Operation.DIV:
            return '/';
        default:
            return '';
    }
}
runCalculator();
