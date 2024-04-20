let multiplicationTable = Number(prompt("Choose the multiplication table you want"));

for (let counter = 1; counter <= 10; counter++) {
    console.log(multiplicationTable + " x " + counter + " = " + (multiplicationTable * counter));
}