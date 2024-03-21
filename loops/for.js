// i: It is an iteration variable used in for loops. It controls the number of iterations performed in the loop. In each iteration, its value is updated according to the loop condition.

let multiplicationTable = Number(prompt("Choose the multiplication table you want"));

for (let counter = 1; counter <= 10; counter++) {
    console.log(multiplicationTable + " x " + counter + " = " + (multiplicationTable * counter));
}

let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

for (let i = 0; i < colors.length; i++) {
    console.log("The color is: " + colors[i]);
}