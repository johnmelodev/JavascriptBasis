// CREATING VARIABLES

let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));
let operation = prompt("Choose the operation you want to perform by entering the number:\n1 = +; \n2 = -; \n3 = *; \n4 = /");

// CREATING SWITCH CASE
switch (parseInt(operation)) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    default:
        console.log("Invalid choice.");
        break;
}
