let num1 = 1;

function sum() {
    let num2 = 2; // Declaration of num2 within the function scope
    console.log(num1 + num2);
    console.log('Function sum');
}
// Calling the function in the terminal
sum();


// NEXT EXAMPLE
console.log('#############')
// Using functions with parameters

function sumWithParameters(num5, num6) {
    return num5 + num6;
}
let sumResult = sumWithParameters(1, 2);
console.log(sumResult);
