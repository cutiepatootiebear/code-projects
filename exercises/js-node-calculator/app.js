var readline = require("readline-sync")
var num1 = readline.question('Please enter your first number ')
var num2 = readline.question('Please enter your second number ')
var mathOperators = ['add', 'subtract', 'multiply', 'divide']
var operation = readline.keyInSelect(mathOperators, 'would you like to Add, Subtract, multiply, or Divide these numbers?');


// add function
function add(num1, num2) {
    return Number(num1)+ Number(num2)
}


// subtract
function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}


// multiplication
function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}


// division
function divide(num1, num2) {
    return Number(num1) / Number(num2)
}


if (operation === 0) {
    console.log(add(num1, num2));
} else if (operation === 1) {
    console.log(subtract(num1, num2))
} else if (operation === 2) {
    console.log(multiply(num1, num2))
} else if (operation === 3) {
    console.log(divide(num1, num2))
} else {
    console.log('try again')
}



