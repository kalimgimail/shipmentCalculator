// const inquirer = require('inquirer');
// const chalk = require('chalk');

import {inquirer} from `inquirer`
import {chalk} from `chalk`


// Define mathematical operations as an enum
const Operation = {
  ADD: 'Addition',
  SUB: 'Subtraction',
  MUL: 'Multiplication',
  DIV: 'Division',
};

function runCalculator() {
  inquirer
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
    .then((answers) => {
      const { operation, num1, num2, continue: wantToContinue } = answers;
      let result;

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

      console.log(
        chalk.bold.green('Result:'),
        `${num1} ${chalk.bold.cyan(getOperationSymbol(operation))} ${num2} = ${chalk.bold.yellow(result)}`
      );

      if (wantToContinue) {
        runCalculator(); // Continue with another calculation
      } else {
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