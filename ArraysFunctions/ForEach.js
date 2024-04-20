// Declaring the array of numbers
let numbers = [1, 2, 3, 4, 5];

// Print the numbers of the array
console.log("Print the numbers of the array:");
numbers.forEach(number => console.log(number));

// Add 1 to each number of the array and print
console.log("Add 1 to each number of the array and print:");
numbers.forEach(number => console.log(number + 1));

// Create a new array with the numbers of the original array incremented by 1
console.log("Create a new array with the numbers of the original array incremented by 1:");
let newArray = [];
numbers.forEach(number => newArray.push(number + 1));
