const array = [];
const indices = [];
let indexCounter = 0;

const targetNumber = parseInt(prompt("Enter the number to be searched:"));

for (let i = 0; i < 10; i++) { // Suppose the array has up to 18 elements
    const element = parseInt(prompt(`Enter element ${i + 1}:`));
    array[i] = element;
}

for (let i = 0; i < 10; i++) { // Suppose the array has up to 180 elements
    if (array[i] === targetNumber) {
        indices[indexCounter] = i;
        indexCounter++;
    }
}

console.log(`The number ${targetNumber} was found at indices: ${indices}`);
